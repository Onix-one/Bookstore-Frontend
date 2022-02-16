import { Component, ElementRef, OnInit, Query, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Observable } from 'rxjs';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { delay, map, startWith } from 'rxjs/operators';
import { query } from '@angular/animations';
import { ClientFactoryService } from '../../../../shared/services/clientfactory.service';
import { AuthorNamesAndIdInfo, ClientApi, CreateNewBookModel, GetAllGenreModel } from '../../../../generated/MainClient/ApiClient';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})

export class EditBookComponent implements OnInit {
  createBook!: FormGroup;
  imageFiles!: FormArray;
  clientApi!: ClientApi;

  separatorKeysCodesGenre: number[] = [ENTER, COMMA];
  separatorKeysCodesAuthor: number[] = [ENTER, COMMA];
  genreCtrl = new FormControl();
  authorCtrl = new FormControl();
  filteredGenres: Observable<string[]>;
  // filteredAuthor: Observable<string[]>;
  filteredAuthor2!: string[];
  genres: string[] = [];
  authors: string[] = [];
  allGenres: string[] = [];
  allGenreModel: GetAllGenreModel[] = [];
  allAuthorModels: AuthorNamesAndIdInfo[] = [];

  allAuth: string[] = [];
  allAuthors: string[] = [];

  @ViewChild('genreInput') genreInput?: ElementRef<HTMLInputElement>;
  @ViewChild('authorInput') authorInput?: ElementRef<HTMLInputElement>;

  constructor(private clientFactory: ClientFactoryService) {
    this.clientApi = clientFactory.getClientApi();
    this.filteredAuthor2 = []

    this.filteredGenres = this.genreCtrl.valueChanges.pipe(
      startWith(null),
      map((genre: string | null) => (genre ? this._filterGenre(genre) : this.allGenres.slice())),
    );
    // this.filteredAuthor = this.authorCtrl.valueChanges.pipe(
    //   startWith(null),
    //   map((author: string | null) => (author ? this._filterAuthor(author) : this.allAuth.slice())),
    // );
  }

  addGenre(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.genres.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.genreCtrl.setValue(null);
  }

  addAuthor(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.authors.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.authorCtrl.setValue(null);
  }

  removeGenre(genre: string): void {
    const index = this.genres.indexOf(genre);

    if (index >= 0) {
      this.genres.splice(index, 1);
    }
  }

  removeAuthor(genre: string): void {
    const index = this.authors.indexOf(genre);

    if (index >= 0) {
      this.authors.splice(index, 1);
    }
  }

  selectedGenre(event: MatAutocompleteSelectedEvent): void {
    this.genres.push(event.option.viewValue);
    if (this.genreInput != null) {
      this.genreInput.nativeElement.value = '';
    }
    this.genreCtrl.setValue(null);
  }

  selectedAuthor(event: MatAutocompleteSelectedEvent): void {
    this.authors.push(event.option.viewValue);
    if (this.authorInput != null) {
      this.authorInput.nativeElement.value = '';
    }
    this.authorCtrl.setValue(null);
  }

  private _filterGenre(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allGenres.filter(genre => genre.toLowerCase().includes(filterValue));
  }

  myVar!: NodeJS.Timeout;

  read(value: string) {
    const filterValue = value.toLowerCase();
    this.myStopFunction(this.myVar)

    if (value.length > 2) {
      this.myVar = setTimeout(() => {

        this.clientApi.getAllAuthorsByPartOfName(value).then((data) => {
          this.allAuthorModels = data;
          this.filteredAuthor2 = data.map(x => x.secondName!);
        });
      }, 2000);
    }

  }

  // private _filterAuthor(value: string): string[] {

  //   const filterValue = value.toLowerCase();
  //   this.myStopFunction(this.myVar)
  //   var authorsNames: string[] = [];

  //   if (value.length > 2) {
  //     this.myVar = setTimeout(() => {
  //       authorsNames = this.allAuth.filter(genre => genre.toLowerCase().includes(filterValue));
  //       console.log(authorsNames);
  //       debugger
  //       return authorsNames;
  //     }, 1000);
  //   }
  //   console.log(authorsNames);
  //   return [];
  // }

  myStopFunction(myVar: NodeJS.Timeout) {
    clearTimeout(myVar);
  }

  ngOnInit() {
 

      this.imageFiles = new FormArray([])
      this.createBook = new FormGroup({
        name: new FormControl(''),
        price: new FormControl(''),
        description: new FormControl(''),
        imageFiles: this.imageFiles,
        book: new FormControl(''),
      });

   this.clientApi.getAllGenres().then((data) => {
      this.allGenreModel = data;
      this.allGenres = data.map(x => x.name!);
      // genresOfBookId : new FormControl(''),
      // authorsId: new FormControl('')
    });
  }

  submit(form: CreateNewBookModel) {
    debugger
    if (this.createBook.valid) {
      form.authorsId = this.allAuthorModels.filter(x => this.authors.includes(x.secondName!)).map(x => x.id!);
      form.genresOfBookId = this.allGenreModel.filter(x => this.genres.includes(x.name!)).map(x => x.id!);
      console.log(form);
      this.clientApi.bookPOST(form).then((err) => console.log(err));
    }
  }

  addImage() {
    this.imageFiles.push(new FormControl([]))
  }

  removeImage(index: number) {
    this.imageFiles.removeAt(index);
  }
}


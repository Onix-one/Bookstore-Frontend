import { Component, ElementRef, OnInit, Query, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Api, AuthorNamesAndIdInfo, CreateNewBookModel } from 'src/app/generated/bookStore-api';
import { ApiService } from 'src/app/shared/services/api.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Observable } from 'rxjs';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { delay, map, startWith } from 'rxjs/operators';
import { query } from '@angular/animations';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})

export class EditBookComponent implements OnInit {
  createBook!: FormGroup;
  imageFiles!: FormArray;
  api?: Api<unknown>;

  separatorKeysCodesGenre: number[] = [ENTER, COMMA];
  separatorKeysCodesAuthor: number[] = [ENTER, COMMA];
  genreCtrl = new FormControl();
  authorCtrl = new FormControl();
  filteredGenres: Observable<string[]>;
  filteredAuthor: Observable<string[]>;
  genres: string[] = [];
  authors: string[] = [];
  allGenres: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry', 'qqqqqqqqqqq', 'wwwwwwwwwwwwwwwww', 'eeeeeeeeeeee', 'rrrrrrrr', 'aaaaaa'];
  allAuthors: string[] = [];

  @ViewChild('genreInput') genreInput?: ElementRef<HTMLInputElement>;
  @ViewChild('authorInput') authorInput?: ElementRef<HTMLInputElement>;

  constructor(private apiService: ApiService) {
    this.api = apiService.GetApi();

    this.filteredGenres = this.genreCtrl.valueChanges.pipe(
      startWith(null),
      map((genre: string | null) => (genre ? this._filterGenre(genre) : this.allGenres.slice())),
    );
    this.filteredAuthor = this.authorCtrl.valueChanges.pipe(
      startWith(null),
      map((author: string | null) => (author ? this._filterAuthor(author) : this.allAuthors.slice())),
    ).pipe((data)=> data as Observable<string[]> );
  }



  addGenre(event: MatChipInputEvent): void {
    debugger
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
    debugger
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
  private async _filterAuthor(value: string): Promise<string[]> {

    myStopFunction(this.myVar);

    if (value.length > 2) {
      let result =await myFunction(this.api!, value);
      

      console.log("results");
      console.log(result[0]);
      console.log(result[1]);
      
      this.myVar = result[0];

      var authorsNames = await result[1].map(x => x.secondName!);

      console.log(authorsNames[0]);
      return  authorsNames;
    }
    return [];
    async function myFunction(api: Api<unknown>, value: string): Promise<[NodeJS.Timeout, AuthorNamesAndIdInfo[]]> {
      var authors!: AuthorNamesAndIdInfo[];
      let timeout =setTimeout(async function () {
        await api.api.authorGetAllAuthorsByPartOfNameList({ partOFName: value }).then((data) => {
          authors = data.data;
        });
        console.log("alex cool");
        
      }, 3000);

      return [timeout, authors];
    }
    function myStopFunction(myVar: NodeJS.Timeout) {
      clearTimeout(myVar);
    }

    const filterValue = value.toLowerCase();
    return this.allAuthors.filter(author => author.toLowerCase().includes(filterValue));
  }

  ngOnInit(): void {
    this.imageFiles = new FormArray([])
    this.createBook = new FormGroup({
      name: new FormControl(''),
      price: new FormControl(''),
      description: new FormControl(''),
      imageFiles: this.imageFiles,
      book: new FormControl(''),
      genresOfBookId: new FormControl(''),
      authorsId: new FormControl('')
    });
  }

  submit(form: CreateNewBookModel) {
    console.log(form);
  }

  addImage() {
    this.imageFiles.push(new FormControl([]))
  }

  removeImage(index: number) {
    this.imageFiles.removeAt(index);
  }
}
// this.api.api.accountLoginCreate(this.loginForm.value).then(
//   (data) => {
//     debugger
//     TokenService.saveToken(
//       data.data.accessToken ? data.data.accessToken : 'default'
//     );
//     // TokenService.saveRefreshToken(data.refreshToken); // TODO add reresh user in backend
//     TokenService.saveUser(data);
//     this.isLoginFailed = false;
//     this.isLoggedIn = true;
//     this.roles = TokenService.getUser().roles;
//     this.appComponent.isAuthenticated = true;
//     this.router.navigate(['/Dashboard']);
//   },
//   (err) => {
//     this.errorMessage = err.error.message;
//     this.isLoginFailed = true;
//   }
// );

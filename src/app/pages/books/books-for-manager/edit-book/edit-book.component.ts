import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Api, CreateNewBookModel } from 'src/app/generated/bookStore-api';
import { ApiService } from 'src/app/shared/services/api.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Observable } from 'rxjs';
import { MatChipInputEvent } from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})

export class EditBookComponent implements OnInit {
  createBook!: FormGroup;
  api?:Api<unknown>;
  
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: string[] = ['Lemon'];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  @ViewChild('fruitInput') fruitInput?: ElementRef<HTMLInputElement>;

  constructor(private apiService: ApiService) {
    this.api = apiService.GetApi();
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allFruits.slice())),
    );
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    if( this.fruitInput!=null){
      this.fruitInput.nativeElement.value = '';
    }
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }

  ngOnInit(): void {
    this.createBook = new FormGroup({
      name: new FormControl(''),
      price : new FormControl(''),
      description : new FormControl(''),
      imageFiles : new FormControl(''),
      book : new FormControl(''),
      genresOfBookId : new FormControl(''),
      authorsId : new FormControl('')
    });  
  }

  submit(form:CreateNewBookModel ) {
    debugger
    console.log(form);
  
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-genre-filter',
  templateUrl: './genre-filter.component.html',
  styleUrls: ['./genre-filter.component.css']
})
export class GenreFilterComponent implements OnInit {

  toppings1: FormGroup;

  constructor(fb: FormBuilder) {
    this.toppings1 = fb.group({
      pepperoni: false,
      extracheese: false,
      mushroom: false,
    });
  }

  ngOnInit(): void {
  }

  filter(){
    debugger
    return this.toppings1
  }


genreList = ["Classic literature","Children's literature", "Bisness literature"]

toppings = new FormControl();
toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];


}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-author-filter',
  templateUrl: './author-filter.component.html',
  styleUrls: ['./author-filter.component.css']
})
export class AuthorFilterComponent implements OnInit {

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


genreList = ["Classic literature","Children's literature", "Bisness literature"]

toppings = new FormControl();
toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

}

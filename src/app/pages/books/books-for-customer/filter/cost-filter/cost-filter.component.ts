import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cost-filter',
  templateUrl: './cost-filter.component.html',
  styleUrls: ['./cost-filter.component.css']
})
export class CostFilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  emailFormControl = new FormControl();
}

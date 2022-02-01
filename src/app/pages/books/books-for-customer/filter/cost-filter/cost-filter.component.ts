import { HttpClient } from 'src/app/generated/bookStore-api';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Api } from 'src/app/generated/bookStore-api';
import { ApiService } from 'src/app/shared/services/api.service';


@Component({
  selector: 'app-cost-filter',
  templateUrl: './cost-filter.component.html',
  styleUrls: ['./cost-filter.component.css']
})
export class CostFilterComponent implements OnInit {

  constructor(private apiService : ApiService) {
  }
  minCost: number = 0;
  maxCost: number = 0;

  async ngOnInit(): Promise<void> {
    var api = this.apiService.GetApi();
    // this.api.baseUrl = "https://localhost:44300";
    const { data } = await api.api.bookMinmaxPriceCreate();
  
    this.minCost = data.minPrice ?? 0;
    this.maxCost = data.maxPrice ?? 0;
  }
  changeMinCost(cost: any) {
    this.minCost = cost.target.value;
  }
  changeMaxCost(cost: any) {
    this.maxCost = cost.target.value;
  }

  filter() {
    debugger

    let cost: [number, number] = [this.minCost, this.maxCost]
    return cost;
  }
  emailFormControl = new FormControl();
}

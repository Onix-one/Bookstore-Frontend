import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ClientApi } from 'src/app/generated/MainClient/ApiClient';
import { ClientFactoryService } from '../../../../../shared/services/clientfactory.service';


@Component({
  selector: 'app-cost-filter',
  templateUrl: './cost-filter.component.html',
  styleUrls: ['./cost-filter.component.css']
})
export class CostFilterComponent implements OnInit {
  clientApi!: ClientApi;

  constructor(private clientFactory: ClientFactoryService) {
    this.clientApi = clientFactory.getClientApi();
  }
  minCost: number = 0;
  maxCost: number = 0;

  async ngOnInit(): Promise<void> {
    var data = await this.clientApi.minmaxPrice();
  
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

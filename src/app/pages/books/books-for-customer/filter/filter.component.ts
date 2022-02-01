import { Component, OnInit, ViewChild } from '@angular/core';
import { CostFilterComponent } from './cost-filter/cost-filter.component';
import { GenreFilterComponent } from './genre-filter/genre-filter.component';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  @ViewChild(GenreFilterComponent) genre?:GenreFilterComponent; 
  @ViewChild(CostFilterComponent) cost?:CostFilterComponent; 
  ngOnInit(): void {
  }

  launchFilter(){
    debugger;
    console.log("works");

    var genreFiltered = this.genre?.filter();

    var costFiltered = this.cost?.filter();
    if (costFiltered != null) {
      console.log(costFiltered[0]);
      console.log(costFiltered[1]);
    }
    
  }
        
}


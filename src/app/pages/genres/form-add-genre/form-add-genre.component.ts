import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Api, CreateNewGenreOfBookModel } from 'src/app/generated/bookStore-api';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-form-add-genre',
  templateUrl: './form-add-genre.component.html',
  styleUrls: ['./form-add-genre.component.css']
})
export class FormAddGenreComponent implements OnInit {
  createGenre!: FormGroup;
  api?:Api<unknown>;


  constructor(private apiService: ApiService) {
    this.api = apiService.GetApi();
  }

  ngOnInit(): void {
    this.createGenre = new FormGroup({
      genreName: new FormControl(''),
      description: new FormControl('')
    })
  }
  submit(form:CreateNewGenreOfBookModel) {

    this.api?.api.genreOfBookCreateCreate(form);
  }
}

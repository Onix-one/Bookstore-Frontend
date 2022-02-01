import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Api, CreateNewAuthorModel } from 'src/app/generated/bookStore-api';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-form-add-author',
  templateUrl: './form-add-author.component.html',
  styleUrls: ['./form-add-author.component.css']
})
export class FormAddAuthorComponent implements OnInit {

  createAuthor!: FormGroup;
  api?:Api<unknown>;


  constructor(private apiService: ApiService) {
    this.api = apiService.GetApi();
  }

  ngOnInit(): void {
    this.createAuthor = new FormGroup({
      firstName: new FormControl(''),
      secondName: new FormControl(''),
      dateOfBirth: new FormControl(''),
      biografy: new FormControl(''),
      nationality: new FormControl(''),
    })
  }
  submit(form:CreateNewAuthorModel) {
    this.api?.api.authorCreateAuthorCreate(form);
  }
}

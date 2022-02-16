import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientApi } from 'src/app/generated/MainClient/ApiClient';
import { ClientFactoryService } from 'src/app/shared/services/clientfactory.service';

@Component({
  selector: 'app-form-add-author',
  templateUrl: './form-add-author.component.html',
  styleUrls: ['./form-add-author.component.css']
})
export class FormAddAuthorComponent implements OnInit {

  createAuthor!: FormGroup;
  clientApi!: ClientApi;

  constructor(private clientFactory: ClientFactoryService) {
    this.clientApi = clientFactory.getClientApi();
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
  submit(form:any) {
    this.clientApi.createAuthor(form);
  }
}

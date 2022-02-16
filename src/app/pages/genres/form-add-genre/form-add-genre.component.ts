import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientApi } from 'src/app/generated/MainClient/ApiClient';
import { ClientFactoryService } from '../../../shared/services/clientfactory.service';

@Component({
  selector: 'app-form-add-genre',
  templateUrl: './form-add-genre.component.html',
  styleUrls: ['./form-add-genre.component.css']
})
export class FormAddGenreComponent implements OnInit {
  createGenre!: FormGroup;
  clientApi! : ClientApi;

  constructor(private clientFactory:ClientFactoryService) {
    this.clientApi = clientFactory.getClientApi();
  }

  ngOnInit(): void {
    this.createGenre = new FormGroup({
      genreName: new FormControl(''),
      description: new FormControl('')
    })
  }
  submit(form:any) {
    this.clientApi.createGenre(form);
  }
}

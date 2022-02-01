import { Injectable } from '@angular/core';
import { Api } from 'src/app/generated/bookStore-api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private api: Api<unknown>) {
    api.baseUrl = "https://localhost:44300";
   }

   GetApi(){
     return this.api;
   }
}

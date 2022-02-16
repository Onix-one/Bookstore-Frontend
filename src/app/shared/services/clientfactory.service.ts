import { Inject, Injectable } from '@angular/core';
import axios from 'axios';
import { ClientApi } from '../../generated/MainClient/ApiClient';
import { ClientIdentityApi } from '../../generated/MainClient/IdentityApiClient';

@Injectable({
  providedIn: 'root',
})
export class ClientFactoryService {
  constructor(
  ) {}

  getClientApi() {
    return new ClientApi("https://localhost:44300", axios);
  }
  getClientIdentityApi() {
    return new ClientIdentityApi("https://localhost:44335", axios);
  }
}
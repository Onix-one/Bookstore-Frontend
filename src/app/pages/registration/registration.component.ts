import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ClientFactoryService } from 'src/app/shared/services/clientfactory.service';
import { ClientIdentityApi } from '../../generated/MainClient/IdentityApiClient';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  registrationUser!: FormGroup;
  clientIdentityApi! : ClientIdentityApi;

  hide: boolean = false;

  ngOnInit(): void {
    this.registrationUser = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      dateOfBirth: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
    });
  }
  

  constructor(private clientFactory:ClientFactoryService) {
    this.clientIdentityApi = clientFactory.getClientIdentityApi();
  }

  submit() {
    if (this.registrationUser.valid) {
      this.clientIdentityApi.registration(this.registrationUser.value).then((err) => console.log(err));
    }
  }
}
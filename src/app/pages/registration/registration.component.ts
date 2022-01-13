import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  registrationUser!: FormGroup;

  hide: boolean = false;

  ngOnInit(): void {
    this.registrationUser = new FormGroup({
      userName: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
    });
  }
  constructor() {}

  submit() {
    if (this.registrationUser.valid) {
      console.log(this.registrationUser.value);

      // this.client
      //   .registerUser(this.registrationUser.value)
      //   .then((err) => console.log(err));
    }
  }

  /*   @Input() error: string | undefined;
  
    @Output() submitEM = new EventEmitter(); */
}

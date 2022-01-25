import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
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
}

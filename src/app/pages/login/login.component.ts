import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private router: Router) {}

  hide: boolean = true;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  readonly loginUrl = 'api/Account/Login';

  submit() {
    // if (!this.loginForm.valid) {
    //   return;
    // }
    // this.client.login(this.loginForm.value).then(
    //   (data) => {
    //     this.tokenStorage.saveToken(
    //       data.accessToken ? data.accessToken : 'default'
    //     );
    //     // this.tokenStorage.saveRefreshToken(data.refreshToken); // TODO add reresh user in backend
    //     this.tokenStorage.saveUser(data);
    //     this.isLoginFailed = false;
    //     this.isLoggedIn = true;
    //     this.roles = this.tokenStorage.getUser().roles;
    //     this.appComponent.isAuthenticated = true;
    //     this.router.navigate(['/Dashboard']);
    //   },
    //   (err) => {
    //     this.errorMessage = err.error.message;
    //     this.isLoginFailed = true;
    //   }
    // );
  }

  reloadPage() {
    window.location.reload();
  }
}

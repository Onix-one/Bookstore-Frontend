import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { ClientIdentityApi } from '../../generated/MainClient/IdentityApiClient';
import { ClientFactoryService } from '../../shared/services/clientfactory.service';
import { TokenService } from '../../shared/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  clientIdentityApi!:ClientIdentityApi;

  constructor(private router: Router,
    private clientFactory: ClientFactoryService,
    private appComponent: AppComponent
    ) {
    this.clientIdentityApi = clientFactory.getClientIdentityApi();
  }
  

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
    if (!this.loginForm.valid) {
      return;
    }
    this.clientIdentityApi.login(this.loginForm.value).then(
      (data) => {
        TokenService.saveToken(
          data.accessToken ? data.accessToken : 'default'
        );
        TokenService.saveRefreshToken(data.refreshToken ? data.refreshToken : 'default'); 
        TokenService.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = TokenService.getUser().roles;
        this.appComponent.isAuthenticated = true;
        this.router.navigate(['/Dashboard']);
      },
      (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }
}

import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClientFactoryService } from './shared/services/clientfactory.service';
import { TokenService } from './shared/services/token.service';
import { ClientIdentityApi } from './generated/MainClient/IdentityApiClient';
import axios from 'axios';
import { AxiosService } from './shared/services/axios.service';
import { EventBusService } from './shared/services/event-bus.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Bookstore-Frontend';

  toggleEventHandler(){

  }
  private clientIdentityApi!: ClientIdentityApi;
  
  constructor(private eventBusService: EventBusService,
     private axiosService: AxiosService,
    private clientfactory: ClientFactoryService) {
    this.clientIdentityApi = this.clientfactory.getClientIdentityApi();
  }

  private roles: string[] = [];
  isAuthenticated: boolean = false;
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  eventBusSub?: Subscription;


  ngOnInit(): void {
    this.axiosService.setupInterceptorsTo(axios);

    this.isLoggedIn = !!TokenService.getToken();

    if (this.isLoggedIn) {
      const user = TokenService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;

      this.eventBusSub = this.eventBusService.on('logout', () => {
        this.Logout();
      });
    }
  }

  ngOnDestroy(): void {
    if (this.eventBusSub)
      this.eventBusSub.unsubscribe();
  }
  Logout(): void {
   
    debugger
    this.clientIdentityApi.logOut().then(err => {
      TokenService.signOut();
      console.log(err); 
    });
    this.isLoggedIn = false;
    this.roles = [];
    this.showAdminBoard = false;
    this.showModeratorBoard = false;
    this.isAuthenticated = false;
  }
}


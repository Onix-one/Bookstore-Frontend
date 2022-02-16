import { Injectable } from '@angular/core';
import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, CancelToken } from 'axios';
import { BehaviorSubject } from 'rxjs';
import { ClientFactoryService } from './clientfactory.service';
import { TokenService } from './token.service';
import { ClientIdentityApi } from '../../generated/MainClient/IdentityApiClient';

@Injectable({
  providedIn: 'root'
})
export class AxiosService {

  private isRefreshing = false;
  private token: string | null = TokenService.getToken();
  private clientIdentityApi: ClientIdentityApi;

  constructor(private clientfactory: ClientFactoryService) {
    this.clientIdentityApi = this.clientfactory.getClientIdentityApi()
  }
  public setupInterceptorsTo(axios: AxiosInstance): AxiosInstance {
    axios.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
      if (config.headers) {
        let token = TokenService.getToken();
        config.headers['Authorization'] = 'Bearer ' + token;
      }
      console.info(`[request] [${JSON.stringify(config)}]`);
      return config;
    });

    axios.interceptors.response.use(undefined, err => {
      const error = err.response;

      // if error is 401 
      if (error.status === 401 && !this.isRefreshing) {
        this.isRefreshing = true;

        const refreshToken = TokenService.getRefreshToken();
        const user = TokenService.getUser();
        const email = user.user.email;


        if (refreshToken) {

          return this.clientIdentityApi.refreshToken(email, refreshToken).then(
            ((token: any) => {
              this.isRefreshing = false;
              TokenService.saveToken(token.accessToken ? token.accessToken : "default");
              TokenService.saveRefreshToken(token.refreshToken ? token.refreshToken : "default");
              TokenService.saveUser(token);

              // if mistake
            }),

            (err) => {
              this.isRefreshing = false;

              TokenService.signOut();
              throw new Error("fail"); // what is the name of fail?
            }
          );
        }
      }

      throw new Error("fail");
    });
    return axios;
  }
}






import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IUser } from '../interfaces/user';

const apiURL=environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: IUser | null | undefined=undefined;
  get isLogged(): boolean{
    return !!this.user;
  }

  constructor(
    private http: HttpClient
  ) { }

  register(data: {email: string; name: string; password: string;}){
    return this.http.post<IUser>(`${apiURL}/users/register`, data).pipe(
      tap((user) => this.user = user));
  }

  login(data: {login: string; password: string;}){
    return this.http.post<IUser>(`${apiURL}/users/login`, data).pipe(
      tap((user) => this.user = user) 
    );
  }

  logout(){
    return this.http.get<IUser>(`${apiURL}/users/logout`).pipe(
      tap(()=> this.user = undefined)
    );
  }
}



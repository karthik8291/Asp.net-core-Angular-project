import { User } from './../_models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseurl = 'http://localhost:5000/api/';
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }

    // tslint:disable-next-line:typedef
    login(model: any){
      return this.http.post(this.baseurl + 'account/login', model).pipe(
        map((response: User) => {
          const user  = response;
          if (user){
              localStorage.setItem('user' , JSON.stringify(user));
              this.currentUserSource.next(user);
          }
        })
        );
    }
    // tslint:disable-next-line:typedef
    register(model: any){
      return this.http.post(this.baseurl + 'account/register', model).pipe(
        map((user: User) => {
          // tslint:disable-next-line:typedef
          if(user){
            localStorage.setItem('user', JSON.stringify(user));
            this.currentUserSource.next(user);
          }
        })
      );
      }

    // tslint:disable-next-line:typedef
    setCurrentUser(user: User){
      this.currentUserSource.next(user);
    }
      // tslint:disable-next-line:typedef
      logout(){
        localStorage.removeItem('user');
        this.currentUserSource.next(null);
    }
  }


import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/**
 * [Deprecated]
*/

export class User {
  user_no: string;
  user_name: string;

  constructor(user_no: string, user_name: string) {
    this.user_no = user_no;
    this.user_name = user_name;
  }
}

@Injectable()
export class AuthServiceProvider {
  currentUser: User;

  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }

  public login(credentials) {
      return Observable.create(observer => {
        let access = (credentials.name === "CSBG");
        this.currentUser = new User('1', 'CSBG');
        observer.next(access);
        observer.complete();
      });
  }

  public getUserInfo() : User {
    return this.currentUser;
  }
}

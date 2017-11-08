import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Resolve } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {


  constructor(private http: Http) {
  }

  getUser(): Observable<Response> | any {
    return Observable.of({
      user: {
        id: 1,
        name: "Vladimir"
      }
    });
  }

}
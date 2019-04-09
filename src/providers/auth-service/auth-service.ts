import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  /**
   * Creates an instance of auth service provider.
   * @param http 
   */
  constructor(public http: HttpClient) {
    console.log('Hello AuthServiceProvider Provider');
  }

}

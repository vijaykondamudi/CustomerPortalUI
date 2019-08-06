import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Singup } from "src/app/sign-up/signupModel";
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerPortalService {

  httpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json',
    'Cache-Control': 'no-cache'
       });    
  options = {
    headers: this.httpHeaders
       };   

  constructor( private httpClient: HttpClient ) { }

  createProfile( signup: Singup ) : Observable<Singup>{
    return this.httpClient.post('api/signup', JSON.stringify(signup), this.options).pipe(map(data => {
      return <Singup>data;
    }))
  }

  validateUser( signup: Singup ) : Observable<Singup>{
    return this.httpClient.post('api/login', JSON.stringify(signup), this.options).pipe(map(data => {
      return <Singup>data;
    }))
  }
}

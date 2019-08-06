import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Singup } from '../sign-up/signupModel';
import { CustomerPortalService } from "src/app/customer-portal.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login : Singup = new Singup();
  genericMessage : {};

  constructor(private csp : CustomerPortalService, private router : Router) { }

  ngOnInit() {
  }

  validateUser(formData) {
    this.genericMessage = '';
    this.csp.validateUser(formData.value).subscribe(
      data => {this.router.navigate(['portal/homepage'])},
       err => { this.genericMessage = err.error; }
    )
  }

}

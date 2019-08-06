import { Component, OnInit } from '@angular/core';
import { Singup } from "src/app/sign-up/signupModel";
import { CustomerPortalService } from "src/app/customer-portal.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  user  : Singup = new Singup();
  genericMessage : {};

  constructor(private csp : CustomerPortalService) { }

  ngOnInit() {
  }

  createProfile(formData) {
    this.genericMessage = {};
      this.csp.createProfile(formData.value).subscribe(
        data => { this.genericMessage = {'message':'User ' + data.username + ' created successfully'} },
        err => { this.genericMessage = err.error; }
      )
  }
}

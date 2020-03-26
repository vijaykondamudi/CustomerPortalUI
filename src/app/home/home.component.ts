import { Component, OnInit } from '@angular/core';
import { CustomerPortalService } from "src/app/customer-portal.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  genericMessage : {};
  allData : any;
  
  constructor(private cps : CustomerPortalService) { console.log("Inside Constructor") }

  ngOnInit() {
	  console.log("Inside OnInit")
	  this.cps.getAllUser().subscribe(
		  data => { this.allData = data;},
	      err => {this.genericMessage = err.error;}
	  )
  }

}

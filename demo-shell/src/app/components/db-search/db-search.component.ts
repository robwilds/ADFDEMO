import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import {MatFormFieldModule, MatHint, MatLabel} from '@angular/material/form-field'; 
// import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';


@Component({
  selector: 'dbsearch',
  templateUrl: './db-search.component.html',
  styleUrls: ['./db-search.component.css'],
  standalone: true,
  imports: [HttpClientModule],
})


export class DbSearchComponent implements OnInit {

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    //private http: HttpClientModule

){
    console.log("router",this.router)
    console.log("route",this.route);
}

ngOnInit() {
  this.getData();
}

getData() {
  //HttpClientModule.call()
  //this.http.get('https://cat-fact.herokuapp.com/facts/')
    //.subscribe(data => {
      //console.log("data from rest api cats", data)
    //}
    
   // );

  }


formClick(){
  console.log("form clicked");
}
//variables
@Input()
searchTerm = "";




}

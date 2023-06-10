import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'db-search',
  templateUrl: './db-search.component.html',
  styleUrls: ['./db-search.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule]
})
export class DbSearchComponent implements OnInit {

  constructor(
    private router:Router,
    private route:ActivatedRoute,

){
    console.log("router",this.router)
    console.log("route",this.route);
}

//variables
@Input()
searchTerm = "";



  ngOnInit(): void {
  }

}

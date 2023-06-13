import { Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
//import { FileViewComponent } from '../file-view/file-view.component';

@Component({
  selector: 'dbsearch2',
  templateUrl: './dbsearch2.component.html',
  styleUrls: ['./dbsearch2.component.css'],

})
export class Dbsearch2Component implements OnInit {

  constructor(
    private http: HttpClient,
    private router:Router,
        private route:ActivatedRoute,
        //private FV: FileViewComponent
    )
    {
      console.log("router",this.router)
      console.log("route",this.route); 
    }

  ngOnInit(): void {
  }

  //variables
  baseurl = 'https://cat-fact.herokuapp.com/facts/';
jsonData: any;
parsedJson: [];

/* @Input()
nodeId = "f2e3cc0d-2d36-4bad-8927-b08cc92819e0" */


displayedColumns: string[] = ['ID', 'user', 'text'];
//dataSource = this.parsedJson;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  items = ['Football', 'Tennis', 'Basketball', 'Rugby', 'Golf'];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }
  getImage(ID) {
console.log("row id is: ",ID)
  }
  homeButtonClicked(){
    this.router.navigate(['/home']);

  }
  apiClicked(){

    //get data from rest api end point and display
   
    this.http.get(this.baseurl).subscribe((data) => {
      
      this.jsonData = JSON.stringify(data);
      this.parsedJson = JSON.parse(this.jsonData);
      console.log("newDat",this.parsedJson);
    
    });

  }
}

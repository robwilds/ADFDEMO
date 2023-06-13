import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dbsearch2Component } from './dbsearch2.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
//import { FileViewModule } from '../file-view/file-view.module';

@NgModule({
  declarations: [
    Dbsearch2Component
  ],
  imports: [
    CommonModule,
    DragDropModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule
  ]
})
export class Dbsearch2Module { }

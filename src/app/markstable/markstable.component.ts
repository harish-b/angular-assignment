import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as data from '../../assets/students.json';

@Component({
  selector: 'app-markstable',
  templateUrl: './markstable.component.html',
  styleUrls: ['./markstable.component.css']
})
export class MarkstableComponent implements OnInit {

  ascending= true;
  students: any = (data as any).default;
  headers = Object.keys(this.students[0]);
  studentsClone: any = (data as any).default.slice();

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    console.log((data as any).default);
    // this.httpClient.get("assets/data.json").subscribe(data =>{
    //   console.log(data);
    //   this.products = data;
    // })
  }

  toggleLayout() {
    this.ascending = !this.ascending;
  }

  // getSortType() {
  //   if (this.ascending) {
  //     return "rotate(-90deg)";
  //   } else {
  //     return "rotate(90deg)";
  //   }
  // }

  sortBy(event, sortBy) {
    let el:HTMLElement = event.currentTarget;
    if (typeof this.students[0][sortBy] === "number") {
      if (el.getAttribute('sortType') === 'ascending') {
        el.setAttribute('sortType', "descending");
        this.students.sort((a,b) => a[sortBy] - b[sortBy]);
      } else if(el.getAttribute('sortType') === 'descending') {
        el.setAttribute('sortType', "neutral");
        this.students.sort((a,b) => b[sortBy] - a[sortBy]);
      } else {
        el.setAttribute('sortType', "ascending");
        this.students = [...this.studentsClone];
      }
    }
    if (typeof this.students[0][sortBy] === "string") {
      if (el.getAttribute('sortType') === 'ascending') {
        el.setAttribute('sortType', "descending");
        this.students.sort((a,b) => a[sortBy].toUpperCase() > b[sortBy].toUpperCase() ? 1 : -1);
      } else if(el.getAttribute('sortType') === 'descending') {
        el.setAttribute('sortType', "neutral");
        this.students.sort((a,b) => a[sortBy].toUpperCase() < b[sortBy].toUpperCase() ? 1 : -1);
      } else {
        el.setAttribute('sortType', "ascending");
        this.students = [...this.studentsClone];
      }
    }
    
  }

}

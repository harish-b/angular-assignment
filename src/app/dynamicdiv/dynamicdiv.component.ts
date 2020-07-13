import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-dynamicdiv',
  templateUrl: './dynamicdiv.component.html',
  styleUrls: ['./dynamicdiv.component.css']
})
export class DynamicdivComponent implements OnInit {
  dynamicArray = [1,2,3,4,5,6,1,2,3,4,5,6];
  @HostListener('window:scroll', ['$event'])
  handleScrollDown(event: Event) {
    let window = event.currentTarget as Window;
    // console.log("window", window.innerHeight);
    // console.log(window.scrollY);
    // console.log("Document",(<Document>event.target).body.clientHeight);
    if (window.innerHeight + window.scrollY > (<Document>event.target).body.clientHeight - 100 ) {
      for (let i = 0; i < 8; i++) {
        this.dynamicArray.push(i);
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

  divClicked(event) {
    if((event.target) instanceof HTMLButtonElement) {
      alert("Button in "+ (Array.from(event.currentTarget.children).indexOf(event.target.parentElement)+1) +" div clicked");
    }
  }

}

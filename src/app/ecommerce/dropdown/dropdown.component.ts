import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @ViewChild('selectByPrice') selectByPrice: ElementRef;
  @Output() sortedByPrice = new EventEmitter<{price:string}>();

  constructor() { }

  ngOnInit(): void {
  }

  sortByPrice(value) {
    // console.log("select changed",value);
    // console.log(this.selectByPrice.nativeElement.value);
    this.sortedByPrice.emit({price:value});
  }

}

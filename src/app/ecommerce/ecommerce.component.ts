import { Component, OnInit } from '@angular/core';
import * as data from '../../assets/ecommerce.json';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent implements OnInit {
  twoColumnLayout= true;
  products: any = (data as any).default;

  constructor() { }

  ngOnInit(): void {
    console.log((data as any).default);
    // this.httpClient.get("assets/data.json").subscribe(data =>{
    //   console.log(data);
    //   this.products = data;
    // })
  }

  toggleLayout() {
    this.twoColumnLayout = !this.twoColumnLayout;
  }

  getGridType() {
    if (this.twoColumnLayout) {
      return '1fr 1fr';
    } else {
      return '1fr 1fr 1fr 1fr';
    }
  }

  sortByPrice(sortBy:{price:string}) {
    console.log(sortBy.price);
    if (sortBy.price === 'low') {
      this.products.sort((a,b) => a.price - b.price);
    } else {
      this.products.sort((a,b) => b.price - a.price);
    }
  }

}

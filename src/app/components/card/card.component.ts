import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgIf } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatSelectModule, 
    MatFormFieldModule, NgIf, NgxPaginationModule,NgFor],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {

  ngOnInit(){
    // on page load -------------------------------------------------------------
    const savedPage = localStorage.getItem('currentPage');
    if (savedPage) {
      this.page = +savedPage;
    }
  }

  // created an products array to check sorting function (after taking data from Api Remove it)---
  products: any[] = [
    {
      Name:"Hindi",
      Price:500,
      Quantity:2,
      Writername: "by LD Goffigan",
      Rating: 4,
      RatedBy: 20,
    },
    {
      Name:"English",
      Price:100,
      Quantity:2,
      Writername: "by LD Goffigan",
      Rating: 4.2,
      RatedBy: 20,
    },
    {
      Name:"Mathematics",
      Price:150,
      Quantity:2,
      Writername: "by LD Goffigan",
      Rating: 4.9,
      RatedBy: 20,
    },
    {
      Name:"Telugu",
      Price:15000,
      Quantity:2,
      Writername: "by LD Goffigan",
      Rating: 4.4,
      RatedBy: 20,
    }
  ];
  //for 50 times loop to check pagination  --------------------------------------------------
  numbers: number[] = Array(50).fill(0).map((x, i) => i + 1);
  page:number = 1;
 
  //data coming from server will written here -------------------------------------------------
  page:number = 1;
  numbers: number[] = Array(50).fill(0).map((x, i) => i + 1);
  bookName: string="hello";
  imgUrl: string="https://miblart.com/wp-content/uploads/2020/01/crime-and-mystery-cover-scaled-1.jpeg"
  Writername: string= "by LD Goffigan";
  rating: number = 4.5;
  ratedBy:number = 20;
  currentPrice:number=1500;
  cancelledPrice:number =2000;
  bookQuantity:number=2;

  // sort Function -----------------------------------------------------------------------
  onFilterChange(event: Event) {
    const filter = (event.target as HTMLSelectElement).value; 
    if (this.products.length > 0) {
      this.products.sort((a: any, b: any) => {
        return a[filter] - b[filter];
      });
    } 
    // checking sorted values in console --------------------------------------
    console.log("sorted By" +filter)
    for (const product of this.products){
      console.log(product);
    }
  }

 // pagination-----------------------------------------------------------------------
  onPageChange(event: number) {
    this.page = event;
    window.scrollTo(0, 0);
    localStorage.setItem('currentPage', event.toString());
  }

  // showText hideText ---------------------------------------
 
  // showContent = false;
  // onMouseEnter() {
  //   if(this.bookQuantity != 0)
  //   this.showContent = true;
  // }
  // onMouseLeave() {
  //   this.showContent = false;
  // }

  // Out of Stocks  -------------------------------------------
  isOutOfStock(quantity: number){
     
  }
}

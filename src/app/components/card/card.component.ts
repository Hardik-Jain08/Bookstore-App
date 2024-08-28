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
    const savedPage = localStorage.getItem('currentPage');
    if (savedPage) {
      this.page = +savedPage;
    }
  }
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
  onPageChange(event: number) {
    this.page = event;
    window.scrollTo(0, 0);
    localStorage.setItem('currentPage', event.toString());
  }

}

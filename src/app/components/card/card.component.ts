import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgIf, NgFor } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { ImgService } from 'src/app/services/img-service/img.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    NgIf,
    NgxPaginationModule,
    NgFor,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  @Input('bookdata') product: any;
  img: any;

  bookName: string = '';
  author: string = '';
  rating = Math.floor(Math.random() * 5) + 1;
  ratedBy = Math.floor(Math.random() * 500) + 1;
  currentPrice: number = 0;

  constructor(private imgService: ImgService, private router: Router) {
    this.img = imgService.getRandomImage();
  }

  ngOnInit(): void {
    if (this.product) {
      this.bookName = this.product.bookName;
      this.author = this.product.author;
      this.currentPrice = this.product.price;
    } else {
      console.error('Product data is not available');
    }
  }

  isOutOfStock(quantity: number): boolean {
    return quantity === 0;
  }
  handleClick() {
    this.product.bookImage = this.img;
    localStorage.setItem('product', JSON.stringify(this.product));
    this.router.navigate(['/product-details']);
  }
}

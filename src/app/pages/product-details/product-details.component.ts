import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart-service/cart.service';
import { FeedbackService } from 'src/app/services/feedback-service/feedback.service';
import { WishlistService } from 'src/app/services/wishlist-service/wishlist.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  book = JSON.parse(localStorage.getItem('product')!);
  token = localStorage.getItem('accessToken');
  bookId = this.book._id;
  feedbacks: any[] = [];
  stars = [false, false, false, false, false];
  comment: string = '';

  constructor(
    private feedbackService: FeedbackService,
    private wishlistService: WishlistService,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.feedbackService.getFeedback(this.bookId, this.token!).subscribe({
      next: (res: any) => {
        this.feedbacks = res.result;
        console.log(this.feedbacks);
      },
      error: (err) => console.log(err),
    });
  }

  getNumbers(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i + 1);
  }

  addReview() {
    const rating = this.stars.filter((star) => star).length.toString();
    const data = {
      rating: rating,
      comment: this.comment,
    };
    console.log(data, this.bookId, this.token);
    this.feedbackService.addFeedback(this.bookId, data, this.token!).subscribe({
      next: (res) => {
        console.log(res);
        this.comment = '';
        this.stars.fill(false);
        this.ngOnInit(); // Refresh feedbacks
      },
      error: (err) => console.log(err),
    });
  }

  onStarClick(index: number) {
    this.stars = this.stars.map((_, i) => i <= index);
  }

  addToWishlist() {
    this.wishlistService.addWishList(this.bookId, this.token!).subscribe({
      next: (res: any) => {
        console.log(res);
        if (res.message === 'Product item is already in wish list') {
          console.log('Product is already in list');
        } else {
          this.router.navigate(['/wishlist']);
        }
      },
      error: (err) => console.log(err),
    });
  }

  addToCart() {
    this.cartService.addCartItem(this.bookId, this.token!).subscribe({
      next: (res: any) => {
        console.log(res);
        if (res.message === 'Product item is already added, increase the item count') {
          console.log('Product item is already added, increase the item count');
        } else {
          this.router.navigate(['/myorder']);
        }
      },
      error: (err: any) => console.log(err),
    });
  }
}

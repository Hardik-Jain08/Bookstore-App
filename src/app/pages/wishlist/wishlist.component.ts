import { Component,OnInit } from '@angular/core';
import { WishlistService } from 'src/app/services/wishlist-service/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit{
  token = localStorage.getItem('accessToken');
  wishlistItems:any=[];
  wislistLength:number=0;
  constructor(private wishListService:WishlistService){}
  ngOnInit(): void {
    this.wishListService.getWishList(this.token!).subscribe({
      next:(res:any)=>{
        this.wishlistItems=res.result.filter((i:any)=>{
          return i.product_id!=null;
        });
        this.wislistLength=this.wishlistItems.length;
        console.log(this.wishlistItems)
      },
      error:(err)=>console.log(err),
      complete:()=>{}
    })
  }

  deleteFromWishlist=(param:any)=>{
    this.wishListService.removeWishList(param, this.token!).subscribe({
      next:(res)=>{
        console.log(res);
        window.location.reload();
      },
      error:(err)=>console.log(err),
      complete(){}
    })
  }
  
}

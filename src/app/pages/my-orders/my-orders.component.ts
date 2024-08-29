import { Component, OnInit } from '@angular/core';
import { MyorderService } from 'src/app/services/myorder.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit{
  order:any={};
  constructor(private route:ActivatedRoute,private myorderService:MyorderService){}
  ngOnInit(): void {
    const orderid =+this.route.snapshot.paramMap.get('id')!;
    this.myorderService.getOrderById(orderid).subscribe(myorder =>{
      this.order = myorder;
    });
    
  }

}

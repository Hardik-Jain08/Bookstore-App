import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductI } from 'src/app/models/product';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private router:Router){}
  searchTerm: string = '';
  // filterCards() {
    
  // }
  openProfile(){
    this.router.navigate(['/dashboard/profile']);
  }
}

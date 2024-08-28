import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  tick1: boolean = true;
  tick2: boolean = true;
  edit(): void {
    if(this.tick1===true){
      this.tick1=false;
    }
  }
  edit1() {
    if(this.tick2===true){
      this.tick2=false;
    }
  }
}

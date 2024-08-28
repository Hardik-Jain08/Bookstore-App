import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { CardComponent } from './components/card/card.component';
import { CounterComponent } from './components/counter/counter.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
const routes: Routes = [
  // { 
  //   path: '', 
  //   component: CardComponent, 
  //   data: { breadcrumb: 'Books' }, 
  // }
  
];
=======
import { PlsLoginComponent } from './pages/pls-login/pls-login.component';
import { CardComponent } from './components/card/card.component';
const routes: Routes = [];
>>>>>>> feat/Card_PleaseLogin

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

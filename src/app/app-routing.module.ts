import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

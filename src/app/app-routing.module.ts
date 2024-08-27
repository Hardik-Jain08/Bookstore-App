import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlsLoginComponent } from './pages/pls-login/pls-login.component';
import { CardComponent } from './components/card/card.component';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

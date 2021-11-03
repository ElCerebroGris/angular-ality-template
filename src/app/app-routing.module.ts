import { LoginComponent } from './components/main/login/login.component';
import { BlankComponent } from './components/main/blank/blank.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component: BlankComponent},
  {path:'teste', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SuccessComponent } from './success/success.component';
import { UserListComponent } from './user-list/user-list.component';
const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'success',
    component:SuccessComponent
  },
  {
    path:'user-list',
    component:UserListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,FormsModule,HttpClientModule]
})
export class AppRoutingModule { }

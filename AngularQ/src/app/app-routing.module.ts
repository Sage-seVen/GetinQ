import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'login',
    pathMatch: 'full' 
  },
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'userhome',component:UserhomeComponent}
  
  
  // {
  //   path:'services',component:OurservicesComponent,
  //   children:[
  //     {path:'services/laundry',component:LaundryComponent},
  //     {path:'services/resturant',component:ResturantComponent}
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

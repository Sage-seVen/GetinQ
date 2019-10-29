import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { SignupComponent } from './signup/signup.component';
import { BankingComponent } from './banking/banking.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { ProfileComponent } from './profile/profile.component';
import { HospitalComponent } from './hospital/hospital.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { ResetpassComponent } from './resetpass/resetpass.component';
import { UserstatusComponent } from './userstatus/userstatus.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'login',
    pathMatch: 'full' 
  },
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'userhome',component:UserhomeComponent},
  {path:'banking',component:BankingComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'adminhome',component:AdminhomeComponent},
  {path:'profile', component:ProfileComponent},
  {path:'hospital',component:HospitalComponent}, 
  {path:'updateprofile', component:UpdateprofileComponent},
  {path:'forgotpass',component:ForgotpassComponent},
  {path:'resetpass',component:ResetpassComponent},
  {path:'userstatus',component:UserstatusComponent}
  
  
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

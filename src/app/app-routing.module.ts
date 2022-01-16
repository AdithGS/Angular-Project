import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { ActivitiesComponent } from './activities/activities.component';
import { DefaultComponent } from './default/default.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { FooterComponent } from './footer/footer.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ResetpasswordComponent } from './resetpswd/resetpassword.component';
import { SettingsComponent } from './settings/settings.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { SupportComponent } from './support/support.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [

  // {path:'subscription', component:SubscriptionComponent},
  { path: 'landing-page', component: LandingPageComponent },
  { path: "", component: LandingPageComponent },
  { path: 'dashboard', component: DefaultComponent },
  // {path:'activities',component:ActivitiesComponent},
  // {path:'users',component:UsersComponent},
  { path: 'footer', component: FooterComponent },


  // {path:'',component:AccountComponent},

  {
    path: 'dashboard',
    component: DefaultComponent, // this is the component with the <router-outlet> in the template
    children: [
      // { path: 'membership', component: UsersComponent },
  {path:'users',component:UsersComponent},
  { path: 'front-page', component: FrontPageComponent },
  {path:'myprofile', component:MyprofileComponent},
  {path:'resetpassword',component:ResetpasswordComponent},
  {path:'editprofile',component:EditprofileComponent},
      { path: 'support', component: SupportComponent },
      { path: 'home', component: HomeComponent },
      { path: 'subscription', component: SubscriptionComponent },
      {path:'user-management',component:UserManagementComponent},
      {path:'settings',component:SettingsComponent},
      { path: 'account', component: AccountComponent },
      { path: 'activities', component: ActivitiesComponent },
      

    ],
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

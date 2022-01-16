import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccountComponent } from './account/account.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



import { SubscriptionComponent } from './subscription/subscription.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { UsersComponent } from './users/users.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ActivitiesComponent } from './activities/activities.component';
import { SupportComponent } from './support/support.component';
import { FooterComponent } from './footer/footer.component';
import { DefaultComponent } from './default/default.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MembersService } from './members.service';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NgxPaginationModule } from 'ngx-pagination';
import { SettingsComponent } from './settings/settings.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccountComponent,
    SubscriptionComponent,
    SidenavComponent,
    UsersComponent,
    UserManagementComponent,
    ActivitiesComponent,
    SupportComponent,
    FooterComponent,
    DefaultComponent,
    HomeComponent,
    PageNotFoundComponent,
    FrontPageComponent,
    LandingPageComponent,
    SettingsComponent,
    
    
   
   
    
  
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatPaginatorModule,
    MatSidenavModule,
    NgxPaginationModule,
    FormsModule
    
    
     
    
  ],
  providers: [MembersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

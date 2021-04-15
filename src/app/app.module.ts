
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { SettingsComponent } from './settings/settings.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { UsersComponent } from './users/users.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list'
import {MatButtonModule} from '@angular/material/button';


import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';




const appRoutes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'blog', component:  BlogComponent},
  {path : 'users', component: UsersComponent },
  {path : 'settings', component: SettingsComponent },
  {path : 'info', component: InfoComponent },
  {path : 'sidenav', component: SidenavComponent },


]
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    BlogComponent,
    InfoComponent,
    SettingsComponent,
    SidenavComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    MatSidenavModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

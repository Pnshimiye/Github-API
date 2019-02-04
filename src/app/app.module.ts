import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
// import { ReposComponent } from './repos/repos.component';
import { APIComponent } from './api/api.component';
import { RepoFormComponent } from './repo-form/repo-form.component';
import { UserFoemComponent } from './user-foem/user-foem.component';
import {HttpClientModule} from '@angular/common/http';
 

@NgModule({
  declarations: [
     AppComponent,
     UserComponent,
    // ReposComponent,
    APIComponent,
    RepoFormComponent,
    UserFoemComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

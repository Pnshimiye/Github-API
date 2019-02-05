import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
// import { ReposComponent } from './repos/repos.component';
import { APIComponent } from './api/api.component';
import { RepoFormComponent } from './repo-form/repo-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { RepoComponent } from './repo/repo.component';


 

@NgModule({
  declarations: [
     AppComponent,
     UserComponent,
    // ReposComponent,
    APIComponent,
    RepoFormComponent,
    UserFormComponent,
    HighlightDirective,
    RepoComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {User} from '../users'
import { environment } from 'src/environments/environment';
import {apiRequestService} from '../api-http/api-request.service'
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[apiRequestService],
})



export class UserComponent implements OnInit { 
  user:User;
  loginName=""

 
  constructor(private apiService:apiRequestService) {
  }
  submitInput() {
    // return this.loginName
    this.apiService.apiRequest(this.loginName);
   
   }





  ngOnInit() {
    this.user = this.apiService.user
    this.apiService.apiRequest("Pnshimiye");
  }
}  
 

 
   


   
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {User} from '../users';
import {Repo}from '../repos'
import { environment } from 'src/environments/environment';
// import { runInThisContext } from 'vm';
// import {environment} from 'src/environments/environment';


@Injectable()
export class apiRequestService {

   user:User;
   repo:Repo;

     
    constructor(private http:HttpClient) { 
      this.user= new User("",0 ,0 ,0 ,"","","");
      this.repo= new Repo('','');
//     
    }
//     constructor(private http:HttpClient) { 
//  this.repo= new Repo('','');
//     }
   
    
    apiRequest(loginName){
      var userInput= loginName;
      // var repository= repoSearch;
   
      interface ApiResponse{
        login:string;
        followers:number;
        following:number;
        public_repos:number;
        html_url:string;
        location:string;
        avatar_url:string;

      } 
     

      let promise =new Promise((resolve,reject)=>{
        
        this.http.get<ApiResponse>('https://api.github.com/users/'+ userInput).toPromise().then(response=>{
            
            this.user.login=response.login
            this.user.followers =response.followers
            this.user.following=response.following
            this.user.public_repos=response.public_repos
            this.user.html_url=response.html_url
            this.user.location=response.location
            this.user.avatar_url=response.avatar_url

            resolve()     

      },error=>{
        this.user= new User('Pnshimiye',0,0,15, 'https://github.com/Pnshimiye?tab=repositories', 'Kigali Rwanda','https://avatars0.githubusercontent.com/u/45591755?s=400&u=d3051c426cefa262a57e6753393e2f7ae7e25928&v=4')
        reject(error)

      }
      )
  })

  return promise
  }
} 
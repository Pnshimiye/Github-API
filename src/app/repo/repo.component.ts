import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Repo} from '../repos';
import {apiRequestService} from '../api-http/api-request.service'




@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css'],
  providers:[apiRequestService],
})
export class RepoComponent implements OnInit {

  repo:Repo
  repoSearch=''

  constructor(private apiService:apiRequestService) { }

  ngOnInit() {
  }

}

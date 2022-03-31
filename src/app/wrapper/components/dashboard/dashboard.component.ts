import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements  OnDestroy, OnInit {
  isExpanded: boolean = false; 
  isdropdown: boolean = false;

  constructor(private http: HttpClient) { }
  ngOnDestroy(): void {
   console.log('jhdfbsdfh');
  }

  ngOnInit(): void {
    console.log('jhdfbsdfh');
  }

}

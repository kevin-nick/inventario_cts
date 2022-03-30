import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isExpanded: boolean = false; 
  isdropdown: boolean = false;
  dtOptions: DataTables.Settings = {};
  posts:any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const dataUrl = 'https://raw.githubusercontent.com/Inventico-Sol/test-json/main/data.json';
    // this.http.get(dataUrl)
    //   .subscribe(response => {
    //     setTimeout(() => {
    //       this.persons = response.data;
    //       console.log(response);
    //       // Calling the DT trigger to manually render the table
    //       this.dtTrigger.next();
    //     });
    //   });
  }

}

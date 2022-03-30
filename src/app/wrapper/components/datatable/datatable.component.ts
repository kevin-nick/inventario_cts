import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
   
@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  posts:any;

  constructor(private http: HttpClient) { }
  //https://jsonplaceholder.typicode.com/users
  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  
    this.http.get('https://jsonplaceholder.typicode.com/users')
      .subscribe(posts => {
        this.posts = posts;
    });

  }

}

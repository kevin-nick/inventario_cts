import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})

export class DatatableComponent implements  OnDestroy, OnInit {
  dtOptions: DataTables.Settings = {};
  posts:any;
  dtTrigger: Subject<any> = new Subject<any>();
  data:any;
  constructor(private http: HttpClient) { }
  
  //https://jsonplaceholder.typicode.com/users
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    }
    this.http.get('http://dummy.restapiexample.com/api/v1/employees')
    .subscribe((res : any) => {
      this.data = res.data;
      this.dtTrigger.next('');
    })
  }

  ngOnDestroy(): void {
     this.dtTrigger.unsubscribe();
  }

}

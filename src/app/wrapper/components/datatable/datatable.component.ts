import { Component, OnInit, OnDestroy, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Obj } from '@popperjs/core';
// import { EventEmitter } from 'stream';


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
  editar:boolean = false;
  eliminar:boolean = false;
  
  // @Output() emitter:EventEmitter = new EventEmitter();

  datos  =  [
    {
      id : "1",
      employee_name : "LIC. kevin nick",
      employee_salary: "PROGRAMADOR"
    },
    {
      id : "2",
      employee_name : "ING. Rafael",
      employee_salary: "CTO"
    },
    {
      id : "3",
      employee_name : "MTR. Leandro",
      employee_salary: "AD. Y FI."
    },
    {
      id : "4",
      employee_name : "ING. Damian alfonzo",
      employee_salary: "CORDINADOR"
    },
    {
      id : "5",
      employee_name : "LIC. Sandra",
      employee_salary: "RECEPCION"
    },
    {
      id : "5",
      employee_name : "C. Jose",
      employee_salary: "Capturista"
      
    }
  ]
  constructor(private http: HttpClient) { }
  
  //https://jsonplaceholder.typicode.com/users
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      responsive: true,
      order: [0, 'desc'],
      dom: 'Bfrtip',
        // buttons: [
        //     'copy', 'csv', 'excel', 'print'
        // ]
      // dom: '<lf<Bt>ip>',
      // buttons: [
      //   'copy', 'csv', 'excel', 'pdf', 'print', 'colvis',
      // ]
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

  View(){

  }
  // emit(ButtonOps:string){
  //   this.emitter.emit(ButtonOps)
  // }

}

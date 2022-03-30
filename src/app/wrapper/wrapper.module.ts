import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WrapperRoutingModule } from './wrapper-routing.module';
import { WrapperComponent } from './wrapper.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DatatableComponent } from './components/datatable/datatable.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    WrapperComponent,
    DashboardComponent,
    DatatableComponent,
    InventarioComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    WrapperRoutingModule
  ]
})
export class WrapperModule { }

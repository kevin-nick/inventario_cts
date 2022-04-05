import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WrapperRoutingModule } from './wrapper-routing.module';
import { WrapperComponent } from './wrapper.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DatatableComponent } from './components/datatable/datatable.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { SidanavComponent } from './components/sidanav/sidanav.component';
 

@NgModule({
  declarations: [
    WrapperComponent,
    DashboardComponent,
    DatatableComponent,
    InventarioComponent,
    UsuariosComponent,
    SidanavComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    WrapperRoutingModule,
    HttpClientModule
  ]
})

export class WrapperModule { }

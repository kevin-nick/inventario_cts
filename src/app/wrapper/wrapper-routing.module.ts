import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WrapperComponent } from './wrapper.component';
import { InventarioComponent } from './components/inventario/inventario.component';

const routes: Routes = [
  {
     path: 'dashboard',
     component: DashboardComponent
  },
  {
    path: 'dashboard/inventario',
    component: InventarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WrapperRoutingModule { }

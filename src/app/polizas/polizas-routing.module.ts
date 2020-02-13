import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormularioPolizasComponent } from './components/formulario-polizas/formulario-polizas.component';
import { ClientesComponent } from './components/clientes/clientes.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'polizas',
    component: FormularioPolizasComponent,
    children: [
      {
        path: 'clientes',
        component: ClientesComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolizasRoutingModule { }

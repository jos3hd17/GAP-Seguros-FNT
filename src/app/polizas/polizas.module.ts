import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolizasRoutingModule } from './polizas-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { ClientesComponent } from './components/clientes/clientes.component';

import { FormularioPolizasComponent } from './components/formulario-polizas/formulario-polizas.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [DashboardComponent, ClientesComponent, FormularioPolizasComponent],
  imports: [
    CommonModule,
    PolizasRoutingModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatOptionModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatDialogModule
  ]
})
export class PolizasModule { }

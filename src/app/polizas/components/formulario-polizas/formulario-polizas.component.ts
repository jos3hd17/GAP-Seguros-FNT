import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ClientesComponent } from '../clientes/clientes.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario-polizas',
  templateUrl: './formulario-polizas.component.html',
  styleUrls: ['./formulario-polizas.component.scss']
})
export class FormularioPolizasComponent implements OnInit {

  poliza: any;
  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  foods: any[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  constructor(fb: FormBuilder, public dialog: MatDialog, private activatedRoute: ActivatedRoute) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
  }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( map => {
      const response: any = map;
      this.poliza = response.params;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ClientesComponent, {
      width: 'auto',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });
  }


}

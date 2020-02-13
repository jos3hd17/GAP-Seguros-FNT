import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  closeDialog() {
    this.dialog.closeAll();
  }

}

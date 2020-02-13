import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Poliza } from '../../models/poliza.model';
import { PolizaService } from '../../services/poliza.service';


const ELEMENT_DATA: Poliza[] = [
  { nombre: 'Incendio', descripcion: 'Hydrogen', finicio: new Date(), fconsolidacion: new Date(), precio: 0 },
  { nombre: 'Accidente', descripcion: 'Helium', finicio: new Date(), fconsolidacion: new Date(), precio: 0 },
  { nombre: 'Terremoto', descripcion: 'Lithium', finicio: new Date(), fconsolidacion: new Date(), precio: 0 },
  { nombre: 'Explocion', descripcion: 'Beryllium', finicio: new Date(), fconsolidacion: new Date(), precio: 0 },
  { nombre: 'Derrumbe', descripcion: 'Boron', finicio: new Date(), fconsolidacion: new Date(), precio: 0 },
  { nombre: 'Inundacion', descripcion: 'Carbon', finicio: new Date(), fconsolidacion: new Date(), precio: 0 },
  { nombre: 'Terremoto', descripcion: 'Nitrogen', finicio: new Date(), fconsolidacion: new Date(), precio: 0 },
  { nombre: 'Accidente', descripcion: 'Oxygen', finicio: new Date(), fconsolidacion: new Date(), precio: 0 },
  { nombre: 'Inundacion', descripcion: 'Fluorine', finicio: new Date(), fconsolidacion: new Date(), precio: 0 },
  { nombre: 'Erupcion', descripcion: 'Neon', finicio: new Date(), fconsolidacion: new Date(), precio: 0 },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'descripcion', 'finicio', 'fconsolidacion', 'precio', 'mat'];
  dataSource = ELEMENT_DATA;
  constructor(private router: Router, private polizasService: PolizaService) { }

  ngOnInit() {
    this.polizasService.getAll().subscribe(resp => {
      const newPolicy = [];
      resp.forEach(element => {
        const transformData: Poliza = {
          nombre: element.Name,
          descripcion: element.Description ,
          cliente: element.Customer,
          estado: 'ACTIVE',
          fconsolidacion: element.StartUpCoverage,
          finicio: element.StartUp ,
          id: element.Id,
          precio: element.Price
        };
        newPolicy.push(transformData);
      });
      this.dataSource = newPolicy;
    })
  }

  polizaAccion(accion: string, element: any): void {
    switch (accion) {
      case 'editar':
        this.router.navigate(['polizas', element]);
        break;
      case 'ver':
        this.router.navigate(['polizas', element]);
        break;
      case 'eliminar':
        break;
    }
  }

  crearNuevaPoliza() {
    this.router.navigate(['polizas']);
  }

}

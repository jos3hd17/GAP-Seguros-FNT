import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPolizasComponent } from './formulario-polizas.component';

describe('FormularioPolizasComponent', () => {
  let component: FormularioPolizasComponent;
  let fixture: ComponentFixture<FormularioPolizasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioPolizasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioPolizasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

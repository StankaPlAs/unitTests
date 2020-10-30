import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MedicoComponent } from './medico.component';
import { MedicoService } from './medico.service';
import { HttpClientModule } from '@angular/common/http';



describe('Medico Component Pruebas de integración', () => {
  let component: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>;

  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [MedicoComponent],
      providers: [MedicoService],
      imports: [HttpClientModule]
    });
    fixture = TestBed.createComponent(MedicoComponent);
    component = fixture.componentInstance;
  });

  it('Debe crearse el componente', () => {

    expect(component).toBeTruthy();

  });

  it('Debe retornar un saludo con el nombre', () => {
    const nombre = 'PEPE';
    const res = component.saludarMedico(nombre);

    expect( res ).toContain(nombre);
  });
});

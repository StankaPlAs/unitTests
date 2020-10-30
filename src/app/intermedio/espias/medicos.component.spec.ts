import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { EMPTY, from, throwError } from 'rxjs';


describe('MedicosComponent', () => {

  let componente: MedicosComponent;
  const servicio = new MedicosService(null);

  beforeEach( () => {
    componente = new MedicosComponent(servicio);
  });

// espia al 'servicio', en concreto al método 'getMedicos' y cuando alquen llame haz una callFake
// la callFake es tiene un callback en la que vamos a definir la respuesta que queremos que de el método
  it('Init: debe cargar los médicos', () => {
    const medicos = ['medico1', 'medico2', 'medico3'];

    spyOn( servicio, 'getMedicos' ).and.callFake(() => {
      return from(medicos);
    });

    componente.ngOnInit();
    expect(componente.medicos.length).toBeGreaterThan(0);

  });

  it('Debe llamar al servidor para agregar un médico', () => {

    const espia = spyOn(servicio, 'agregarMedico').and.callFake(medicos => {
      return EMPTY;
    });

    componente.agregarMedico();
    expect(espia).toHaveBeenCalled();

  });

  it('Debe agregar un nuevo médico al arreglo de medicos ', () => {
    const medico = { id: 1, nombre: 'Juan'};
    spyOn( servicio, 'agregarMedico').and.returnValue(from([medico]));

    componente.agregarMedico();
    expect(componente.medicos.length).toBe(1);
    expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);


  });

  it('Si falla la adición de un médico, la propiedad mensajeError dete ser igual al error del servicio ', () => {
    const miError = 'No se puedo guardar';

    spyOn( servicio, 'agregarMedico').and
      .returnValue( throwError( miError ));

    componente.agregarMedico();
    expect(componente.mensajeError).toBe(miError);

  });

  it('Debe llamar al servidor para borrar un médico', () => {
    spyOn(window, 'confirm').and
      .returnValue(true);

    const espia = spyOn( servicio, 'borrarMedico' ).and
      .returnValue( EMPTY );

    componente.borrarMedico('1');
    expect(espia).toHaveBeenCalledWith('1');

  });

  it('NO Debe llamar al servidor para borrar un médico', () => {
    spyOn(window, 'confirm').and
      .returnValue(false);

    const espia = spyOn( servicio, 'borrarMedico' ).and
      .returnValue( EMPTY );

    componente.borrarMedico('1');
    expect(espia).not.toHaveBeenCalled();

  });

});

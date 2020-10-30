// describe('Pruebas de strings'); //agrupar pruebas
// it('Debe devolver un string'); // una prueba especifica

import { mensaje } from './string';

describe( 'Pruebas de strings', () => {
  it( 'Debe devolver un string', () => {
    const resp = mensaje('Fernando');
    expect(typeof resp).toBe('string');
  });

  it( 'Debe devolver un saludo con el nombre enviado', () => {
    const nombre = 'Pedro';
    const resp = mensaje(nombre);
    expect(resp).toContain( nombre );
  });

});

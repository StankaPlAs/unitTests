import { usuarioLogeado } from './booleanos';

describe('Pruebas de booleanos', () => {
  it('Debe retornar true', () => {
    const res = usuarioLogeado();
    expect(res).toBeTruthy();
  });
});

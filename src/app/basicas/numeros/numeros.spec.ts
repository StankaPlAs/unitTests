import { incrementar } from './numeros';


describe('Pruebas para números', () => {
  it('Debe devolver 100, si el número ingresado es mayor a 100 ', () => {
    const res = incrementar(300);
    expect(res).toEqual(100);
  });
  it('Debe retornar n+1, si el número ingresado es menor a 100 ', () => {
    const res = incrementar(50);
    expect(res).toEqual(51);
  });

});

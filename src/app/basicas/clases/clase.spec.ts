import { Jugador } from './clase';

describe('Pruebas para clases', () => {

  let jugador = new Jugador();

  beforeEach( () => {
    // console.log('beforeEach');
    // jugador.hp = 100; seria una solucion para reiniciar los hp del jugador antes de cada prueba,
  //  pero si hay muchas propiedades, setearlas una a una sería costoso por eso vamos a usar el new()
    jugador = new Jugador();
  });
  it('Debe devolver 80 de hp si recibe 20 de daño', () => {
    const res = jugador.recibeDanio(20);

    expect(res).toBe(80);
  });

  it('Debe devolver 50 de hp si recibe 50 de daño', () => {
    const res = jugador.recibeDanio(50);

    expect(res).toBe(50);
  });

  it('Debe devolver 0 si recibe 100 o mas de daño', () => {
    const res = jugador.recibeDanio(100);

    expect(res).toBe(0);
  });


});


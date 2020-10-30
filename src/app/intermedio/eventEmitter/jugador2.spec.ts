import { Jugador2 } from './jugador2';


describe('Jugador2 emite', () => {
  let jugador: Jugador2;
  beforeEach( () => jugador = new Jugador2());

  it('Debe emitir un evento cuando recibe daños', () => {
    let nuevoHP = 0;

    jugador.hpCambia.subscribe(hp => {
      nuevoHP = hp;
    });

    jugador.recibeDanio(1000);
    expect(nuevoHP).toBe(0);
  });

  it('Debe emitir un evento cuando recibe daños y sobrevivir si el daño es menor a 100', () => {
    let nuevoHP = 0;

    jugador.hpCambia.subscribe(hp => {
      nuevoHP = hp;
    });

    jugador.recibeDanio(50);
    expect(nuevoHP).toBe(50);
  });



});

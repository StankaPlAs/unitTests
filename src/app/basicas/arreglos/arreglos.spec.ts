import { obtenerRobots } from './arreglos';

describe('Pruebas para arreglos (vectores)', () => {
  it('Debe devolver 3 robots', () => {
    const res = obtenerRobots();
    expect(res.length).toBeGreaterThanOrEqual(3);
  });

  it('Debe contener MegaMan y Ultron', () => {
    const res = obtenerRobots();
    expect(res).toContain('MegaMan');
    expect(res).toContain('Ultron');
  });

});

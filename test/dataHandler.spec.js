import { buscar } from '../src/dataHandler';

describe('buscar', () => {
  it('debería retornar un array con la data completa de los libros de HP', () => {
    const expected = buscar()
    expect(typeof expected).toBe('object');
    expect(expected.length).toBe(8);
  });

  it('debería validar que el array contenga todos sus propiedades', () => {
    const expected = buscar()
    expect(expected[0].title).toBeTruthy()
    expect(expected[0].ageRecommended).toBeTruthy()
    expect(expected[0].bookSold).toBeTruthy()
    expect(expected[0].title).toBe('Harry Potter y la Piedra Filosofal');
    expect(typeof expected[0].bookSold).toBe('number');
  });
});

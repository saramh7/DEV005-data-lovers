import {buscarLibro , anotherExample } from '../src/data.js';

const traerData = [
  {
    "id": 1,
    "image": "1-piedra-filosofal.jpg",
    "title": "Harry Potter and the Sorcerer's Stone"
     
  },
  {
    "id": 2,
    "image": "2-camara-secreta.jpg",
    "title": "Harry Potter and the chamber of secrets"
    
  },
  {
    "id": 3,
    "image": "3-prisionero-azkaban.jpg",
    "title": "Harry Potter and the Prisoner of Azkaban"
   
  },
  {
    "id": 4,
    "image": "4-caliz-fuego.jpg",
    "title": "Harry Potter and the Goblet of Fire"
   
  },
  {
    "id": 5,
    "image": "5-orden-fenix.jpeg",
    "title": "Harry Potter and the Order of the Phoenix"
   
  },
  {
    "id": 6,
    "image": "6-misterio-del-principe.jpeg",
    "title": "Harry Potter and the Half-Blood Prince"
    
  },
  {
    "id": 7,
    "image": "7-reliquias-muerte.jpg",
    "title": "Harry Potter and the Deathly Hallows"
    
  },
  {
    "id": 8,
    "image": "8-legado-maldito.jpeg",
    "title": "Harry Potter and the Cursed Child"
    
  }
] 

describe('buscarLibro', () => {
  it('deberia retornar un array de objetos de los titulos de cada libro', () => {
    expect().toBe ('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});

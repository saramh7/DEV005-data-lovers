import { buscar, buscarLibro, filtrar, ordenar, obtenerVentas } from '../src/dataHandler';

const mockOrder = [
  {
    id: 4,
    image: '4-caliz-fuego.jpg',
    title: 'Harry Potter y el Cáliz de Fuego',
    releaseDay: 'July 8, 2000',
    releaseYear: 2000,
    author: 'J. K. Rowling',
    ageRecommended: '10-11 years',
    bookSold: 65000000,
    description: 'Hogwarts se prepara para el Torneo de los Tres Magos, en el que competirán tres escuelas de hechicería. Para sorpresa de todos, Harry Potter es elegido para participar en la competencia, en la que deberá luchar contra dragones, ingresar al agua y enfrentar sus mayores miedos.'
  },
  {
    id: 8,
    image: '8-legado-maldito.jpeg',
    title: 'Harry Potter y el Legado Maldito',
    releaseDay: 'July 30, 2016',
    releaseYear: 2016,
    author: 'J. K. Rowling',
    ageRecommended: '12+ years',
    bookSold: 5400000,
    description: 'El segundo hijo de Harry ingresó a Hogwarts, pero en Slytherin.Su relación con Harry está empeorando y se hizo amigo cercano del hijo de Draco, Scorpius Malfoy, de quien se dice que es el hijo de Lord Voldemort'
  },
  {
    id: 6,
    image: '6-misterio-del-principe.jpeg',
    title: 'Harry Potter y el Misterio del Príncipe',
    releaseDay: 'July 16, 2005',
    releaseYear: 2005,
    author: 'J. K. Rowling',
    ageRecommended: '10-11 years',
    bookSold: 65000000,
    description: 'Harry descubre un libro poderoso y, mientras intenta descubrir sus orígenes, colabora con Dumbledore en la búsqueda de una serie de objetos mágicos que ayudarán en la destrucción de Lord Voldemort.'
  },
  {
    id: 3,
    image: '3-prisionero-azkaban.jpg',
    title: 'Harry Potter y el Prisionero de Azkaban',
    releaseDay: 'July 8, 1999',
    releaseYear: 1999,
    author: 'J. K. Rowling',
    ageRecommended: '7-9 years',
    bookSold: 70000000,
    description: 'El tercer año de estudios de Harry en Hogwarts se ve amenazado por la fuga de Sirius Black de la prisión de Azkaban. Al parecer, se trata de un peligroso mago que fue cómplice de Lord Voldemort y que intentará vengarse de Harry Potter.'
  },
  {
    id: 2,
    image: '2-camara-secreta.jpg',
    title: 'Harry Potter y la Cámara Secreta',
    releaseDay: 'July 2, 1998',
    releaseYear: 1998,
    author: 'J. K. Rowling',
    ageRecommended: '7-9 years',
    bookSold: 100000000,
    description: 'Harry Potter y los estudiantes de segundo año investigan una amenaza malévola para sus compañeros de clase de Hogwarts, una bestia amenazante que se esconde dentro del castillo.'
  },
  {
    id: 5,
    image: '5-orden-fenix.jpeg',
    title: 'Harry Potter y la Orden del Fénix',
    releaseDay: 'June 21, 2003',
    releaseYear: 2003,
    author: 'J. K. Rowling',
    ageRecommended: '10-11 years',
    bookSold: 65000000,
    description: 'En su quinto año en Hogwarts, Harry descubre que muchos miembros de la comunidad mágica no saben la verdad sobre su encuentro con Lord Voldemort. Cornelius Fudge, Ministro de Magia, nombra a Dolores Umbridge como maestra de Defensa Contra las Artes Oscuras porque cree que el Profesor Dumbledore planea hacerse cargo de su trabajo. Pero sus enseñanzas son inadecuadas, por lo que Harry prepara a los alumnos para defender la escuela contra el mal.'
  },
  {
    id: 1,
    image: '1-piedra-filosofal.jpg',
    title: 'Harry Potter y la Piedra Filosofal',
    releaseDay: 'June 26, 1997',
    releaseYear: 1997,
    author: 'J. K. Rowling',
    ageRecommended: '7-9 years',
    bookSold: 120000000,
    description: 'El día de su cumpleaños, Harry Potter descubre que es hijo de dos magos muy conocidos, de los que ha heredado poderes mágicos. Debe asistir a una famosa escuela de magia y hechicería, donde entabla amistad con dos jóvenes que se convertirán en sus compañeros de aventura. Durante su primer año en Hogwarts, descubre que un mago malévolo y poderoso llamado Voldemort está en busca de una piedra filosofal que prolongue la vida de su dueño.'
  },
  {
    id: 7,
    image: '7-reliquias-muerte.jpg',
    title: 'Harry Potter y las Reliquias de la Muerte',
    releaseDay: 'July 21, 2007',
    releaseYear: 2007,
    author: 'J. K. Rowling',
    ageRecommended: '12+ years',
    bookSold: 65000000,
    description: 'Harry, Ron y Hermione emprenden una peligrosa misión para localizar y destruir el secreto de la inmortalidad y la destrucción de Voldemort: los Horrocruces.Solos, sin la guía de sus maestros ni la protección del profesor Dumbledore, los tres amigos deben apoyarse más que nunca el uno en el otro. Pero hay fuerzas oscuras en el medio que amenazan con separarlos. Harry Potter está cada vez más cerca de la tarea para la que se ha estado preparando desde el primer día que pisó Hogwarts: la última batalla con Voldemort'
  }
]
const mockOrderDes = [
  {
    id: 7,
    image: '7-reliquias-muerte.jpg',
    title: 'Harry Potter y las Reliquias de la Muerte',
    releaseDay: 'July 21, 2007',
    releaseYear: 2007,
    author: 'J. K. Rowling',
    ageRecommended: '12+ years',
    bookSold: 65000000,
    description: 'Harry, Ron y Hermione emprenden una peligrosa misión para localizar y destruir el secreto de la inmortalidad y la destrucción de Voldemort: los Horrocruces.Solos, sin la guía de sus maestros ni la protección del profesor Dumbledore, los tres amigos deben apoyarse más que nunca el uno en el otro. Pero hay fuerzas oscuras en el medio que amenazan con separarlos. Harry Potter está cada vez más cerca de la tarea para la que se ha estado preparando desde el primer día que pisó Hogwarts: la última batalla con Voldemort'
  },
  {
    id: 1,
    image: '1-piedra-filosofal.jpg',
    title: 'Harry Potter y la Piedra Filosofal',
    releaseDay: 'June 26, 1997',
    releaseYear: 1997,
    author: 'J. K. Rowling',
    ageRecommended: '7-9 years',
    bookSold: 120000000,
    description: 'El día de su cumpleaños, Harry Potter descubre que es hijo de dos magos muy conocidos, de los que ha heredado poderes mágicos. Debe asistir a una famosa escuela de magia y hechicería, donde entabla amistad con dos jóvenes que se convertirán en sus compañeros de aventura. Durante su primer año en Hogwarts, descubre que un mago malévolo y poderoso llamado Voldemort está en busca de una piedra filosofal que prolongue la vida de su dueño.'
  },
  {
    id: 5,
    image: '5-orden-fenix.jpeg',
    title: 'Harry Potter y la Orden del Fénix',
    releaseDay: 'June 21, 2003',
    releaseYear: 2003,
    author: 'J. K. Rowling',
    ageRecommended: '10-11 years',
    bookSold: 65000000,
    description: 'En su quinto año en Hogwarts, Harry descubre que muchos miembros de la comunidad mágica no saben la verdad sobre su encuentro con Lord Voldemort. Cornelius Fudge, Ministro de Magia, nombra a Dolores Umbridge como maestra de Defensa Contra las Artes Oscuras porque cree que el Profesor Dumbledore planea hacerse cargo de su trabajo. Pero sus enseñanzas son inadecuadas, por lo que Harry prepara a los alumnos para defender la escuela contra el mal.'
  },
  {
    id: 2,
    image: '2-camara-secreta.jpg',
    title: 'Harry Potter y la Cámara Secreta',
    releaseDay: 'July 2, 1998',
    releaseYear: 1998,
    author: 'J. K. Rowling',
    ageRecommended: '7-9 years',
    bookSold: 100000000,
    description: 'Harry Potter y los estudiantes de segundo año investigan una amenaza malévola para sus compañeros de clase de Hogwarts, una bestia amenazante que se esconde dentro del castillo.'
  },
  {
    id: 3,
    image: '3-prisionero-azkaban.jpg',
    title: 'Harry Potter y el Prisionero de Azkaban',
    releaseDay: 'July 8, 1999',
    releaseYear: 1999,
    author: 'J. K. Rowling',
    ageRecommended: '7-9 years',
    bookSold: 70000000,
    description: 'El tercer año de estudios de Harry en Hogwarts se ve amenazado por la fuga de Sirius Black de la prisión de Azkaban. Al parecer, se trata de un peligroso mago que fue cómplice de Lord Voldemort y que intentará vengarse de Harry Potter.'
  },
  {
    id: 6,
    image: '6-misterio-del-principe.jpeg',
    title: 'Harry Potter y el Misterio del Príncipe',
    releaseDay: 'July 16, 2005',
    releaseYear: 2005,
    author: 'J. K. Rowling',
    ageRecommended: '10-11 years',
    bookSold: 65000000,
    description: 'Harry descubre un libro poderoso y, mientras intenta descubrir sus orígenes, colabora con Dumbledore en la búsqueda de una serie de objetos mágicos que ayudarán en la destrucción de Lord Voldemort.'
  },
  {
    id: 8,
    image: '8-legado-maldito.jpeg',
    title: 'Harry Potter y el Legado Maldito',
    releaseDay: 'July 30, 2016',
    releaseYear: 2016,
    author: 'J. K. Rowling',
    ageRecommended: '12+ years',
    bookSold: 5400000,
    description: 'El segundo hijo de Harry ingresó a Hogwarts, pero en Slytherin.Su relación con Harry está empeorando y se hizo amigo cercano del hijo de Draco, Scorpius Malfoy, de quien se dice que es el hijo de Lord Voldemort'
  },
  {
    id: 4,
    image: '4-caliz-fuego.jpg',
    title: 'Harry Potter y el Cáliz de Fuego',
    releaseDay: 'July 8, 2000',
    releaseYear: 2000,
    author: 'J. K. Rowling',
    ageRecommended: '10-11 years',
    bookSold: 65000000,
    description: 'Hogwarts se prepara para el Torneo de los Tres Magos, en el que competirán tres escuelas de hechicería. Para sorpresa de todos, Harry Potter es elegido para participar en la competencia, en la que deberá luchar contra dragones, ingresar al agua y enfrentar sus mayores miedos.'
  }
]

describe("dataHandler", () => {
  describe('buscar', () => {
    it('debería retornar un array con la data completa de los libros de HP', () => {
      const expected = buscar()
      expect(typeof expected).toBe('object');
      expect(expected.length).toBe(8);
    });

    it('debería validar que el array contenga todos sus propiedades', () => {
      const expected = buscar()
      expect(expected[0].title).toBeTruthy()
      expect(expected[0].bookSold).toBeTruthy()
      expect(typeof expected[0].bookSold).toBe('number');
    });
  });

  describe('filtrar', () => {
    it('debería validar que la función filtrar retorne un array', () => {
      const expected = filtrar('10-11 years')
      expect(typeof expected).toBe('object');
      expect(expected.length).toBe(3);
    })
    it('debería retornar un array vacio para una edad recomendada que no existe', () => {
      const expected = filtrar('1000 years')
      expect(typeof expected).toBe('object');
      expect(expected.length).toBe(0);
    })
  })

  describe('buscarLibro', () => {
    it('debería validar que la función buscarLibro retorne un array', () => {
      const expected = buscarLibro('Harry Potter y las Reliquias de la Muerte')
      expect(typeof expected).toBe('object');
      expect(expected.length).toBe(1);
    })
    it('debería retornar un array vacío para un libro que no existe', () => {
      const expected = buscarLibro('Harry Potter y mi abuelita')
      expect(typeof expected).toBe('object');
      expect(expected.length).toBe(0);
    })
  })

  describe('ordenar', () => {
    it('debería retornar libros ascendentes', () => {
      const librosAscendentes = ordenar('a-z')
      expect(librosAscendentes).toEqual(mockOrder);

    });
    it('debería retornar libros descendentes', () => {
      const librosDescendentes = ordenar('z-a')
      expect(librosDescendentes).toEqual(mockOrderDes)
    })
    it('debería retornar un error para tipo distinto de "a-z" o "z-a"', () => {
      const librosDescendentes = ordenar("ascendente")
      expect(librosDescendentes).toEqual("error")
    })
  });

  describe('obtenerVentas', () => {
    it('debería retornar un numero con el total de libros vendidos', () => {
      const expected = obtenerVentas()
      expect(typeof expected).toBe('number');
    })
  })
})
import data from './data/harrypotter/harry.js';

export const buscar = () => {
  return data.books;
};

export const filtrar = (valorSeleccionado) => {
  return data.books.filter((libro) => { return libro.ageRecommended === valorSeleccionado }) //funcion callback    
}

export const buscarLibro = (libroSeleccionado) => {
  return data.books.filter((libro) => { return libro.title === libroSeleccionado })
}

export const ordenar = (tipo) => {
  const libros = [...data.books];

  if (tipo === "a-z") 
    return libros.sort((a, b) => {
      const nameA = a.title.toUpperCase();
      const nameB = b.title.toUpperCase();
      if (nameA < nameB) {
        return nameA.localeCompare(nameB)
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });

  if (tipo === "z-a")
  
    return libros.sort((a, b) => {
      const nameA = a.title.toUpperCase();
      const nameB = b.title.toUpperCase();
      if (nameA < nameB) {
        return 1;
      
      }
      if (nameA > nameB) {
        return -1;
      }

      return 0;
    });
    
};

import data from './data/harrypotter/harry.js';
// estas funciones son de ejemplo

export const buscar = () => {
  return data.books;
};
const encontrar = document.getElementById("encontrar")
const  characters = document.getElementById("characters")
export const filtrar = ( ) => {



  
  encontrar.innerHTML= '';

  const traerPersonaje = data.characters.toLoWerCase();
  for(let name of characters){
    let name = characters.name.toLoWerCase();
    if (name.indexOf(traerPersonaje) !== -1 ){
      encontrar.innerHTML += `
     <li>${traerPersonaje.name} - valor ${traerPersonaje.value}</li>
     `
    }
  }
  if(encontrar.innerHTML === ''){
    encontrar.innerHTML += `
     <li>${traerPersonaje.name} </li>
     `
  }
}

export const ordenar = (tipo) => {
  const libros = data.books;

  if (tipo === "a-z")
    return libros.sort((a, b) => {
      const nameA = a.title.toUpperCase();
      const nameB = b.title.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
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
      // names must be equal
      return 0;
    });
};

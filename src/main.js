import { buscar, ordenar, filtrar, buscarLibro } from "./dataHandler.js"

//Elementos DOM en variable
const btnBuscar = document.getElementById("btnBuscar")
const booksContainer = document.getElementById("booksContainer")
const sortTitle = document.getElementById("sortTitle")
const filterSelect = document.getElementById("filterSelect")
const buscarLibros = document.getElementById("buscarLibros")
//Eventos del DOM
btnBuscar.addEventListener('click', buscarInfo)
sortTitle.addEventListener('change', ordenarPorTitulo)
filterSelect.addEventListener('change', filtrarPorEdad)
buscarLibros.addEventListener('change', buscarPorLibro)
// btnFiltrar.addEventListener('click',)
// btnOrdenar.addEventListener('click',)

//Funciones que interactuan con el DOM
function buscarInfo() {
  const resultado = buscar() //a const resultado, le estoy asignado el retorno de la funcion buscar

  insertarLibros(resultado)
}

function ordenarPorTitulo(event) {
  const valorSeleccionado = event.target.value;// rescata el valor que selecciona el usuario en el select
  if (valorSeleccionado === "") return

  let resultado;
  if (valorSeleccionado === "A-Z")
    resultado = ordenar("a-z")
  else
    resultado = ordenar("z-a")

  insertarLibros(resultado)

}

function filtrarPorEdad(event) {
  const valorSeleccionado = event.target.value;
  if (valorSeleccionado === "") {
    const datosIniciales = buscar();
    insertarLibros(datosIniciales)
    return
  } else {
    const resultado = filtrar(valorSeleccionado)// la variable resultado, guarda el retorno de la funcion filtrar.
    insertarLibros(resultado)
  }
}

function buscarPorLibro(event){
  const libroSeleccionado = event.target.value; //asigno una const al event
  if (libroSeleccionado === ""){    
    const datoSeleccionados = buscar(); //la const va ser igul ala info
    insertarLibros(datoSeleccionados) // se le asigna la info a la const
    return
  } else{
    const resultado = buscarLibro(libroSeleccionado)//resultado guarda el retorno de la seleccion
    insertarLibros(resultado) //resultado es donde alberga toda la data
  }
}

function insertarLibros(librosAInsertar) {
  booksContainer.removeChild(document.getElementById("books")) // removeChild elimina todo lo que esté en el elemento Html de id=books al presionar boton buscar (de no hacerlo se vuelve agregar la info al presionar boton buscar )

  const books = document.createElement("div") // le estoy asignado crear un elemento div en Html (este div contendrá todo los libros)
  books.setAttribute("id", "books"); // le asigna al div creado un atributo id con valor books para invocarlo desde Js
  books.setAttribute("class", "books");//le asigna al div creado un atributo class con valor books  para invocarlo desde Css
  booksContainer.appendChild(books) // Inserta el div creado con los 2 atributos en el elemento con id booksContainer del Html

  librosAInsertar.forEach(book => { // forEach recorre el arrow function es una funcion anónima
    const libro = document.createElement("div");
    libro.setAttribute("id", "book" + book.id);
    libro.setAttribute("class", "book");
    books.appendChild(libro)

    const cover = document.createElement("div");
    cover.setAttribute("id", "cover" + book.id);
    cover.setAttribute("class", "cover");
    libro.appendChild(cover)

    const imagen = document.createElement("img");
    imagen.setAttribute("src", "imagen/" + book.image);
    imagen.setAttribute("class", "book-image");
    cover.appendChild(imagen)

    const titulo = document.createElement("h3");
    titulo.setAttribute("id", "bookTitle" + book.id);
    titulo.setAttribute("class", "book-title");
    titulo.appendChild(document.createTextNode(book.title))
    cover.appendChild(titulo)

    const backCover = document.createElement("div");
    backCover.setAttribute("id", "backCover" + book.id);
    backCover.setAttribute("class", "back-cover");
    libro.appendChild(backCover)

    const fecha = document.createElement("label");
    fecha.setAttribute("id", "bookReleaseDay" + book.id);
    fecha.setAttribute("class", "book-release-day")
    fecha.appendChild(document.createTextNode(book.releaseDay))
    backCover.appendChild(fecha)

    const author = document.createElement("label");
    author.setAttribute("id", "bookAuthor" + book.id);
    author.setAttribute("class", "book-author")
    author.appendChild(document.createTextNode(book.author))
    backCover.appendChild(author)

    const description = document.createElement("label");
    description.setAttribute("id", "bookDescription" + book.id);
    description.setAttribute("class", "book-description")
    description.appendChild(document.createTextNode(book.description))
    backCover.appendChild(description)
  });
}


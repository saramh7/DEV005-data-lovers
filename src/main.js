import { buscar, ordenar, filtrar } from "./dataHandler.js"

//Elementos DOM en variable
const btnBuscar = document.getElementById("btnBuscar")
const booksContainer = document.getElementById("booksContainer")
// const btnOrdenar = document.getElementsById("ordenar")
// const books = document.getElementsByName("books")

//Eventos del DOM
btnBuscar.addEventListener('click', buscarInfo)
// btnFiltrar.addEventListener('click',)
// btnOrdenar.addEventListener('click',)

//Funciones que interactuan con el DOM
function buscarInfo() {
  const resultado = buscar() //a const resultado, le estoy asignado el retorno de la funcion buscar
  booksContainer.removeChild(document.getElementById("books"))

  const books = document.createElement("div")
  books.setAttribute("id", "books");
  books.setAttribute("class", "books");
  booksContainer.appendChild(books)

  resultado.forEach(book => {
    const libro = document.createElement("div");
    libro.setAttribute("id", "book" + book.id);
    libro.setAttribute("class", "book");
    books.appendChild(libro)

    const cover = document.createElement("div");
    cover.setAttribute("id", "cover" + book.id);
    cover.setAttribute("class", "cover");
    libro.appendChild(cover)

    const titulo = document.createElement("label");
    titulo.setAttribute("id", "bookTitle" + book.id);
    titulo.setAttribute("class", "book-title");
    titulo.appendChild(document.createTextNode(book.title))
    cover.appendChild(titulo)

    const imagen = document.createElement("img");
    imagen.setAttribute("src", "imagen/" + book.image);
    imagen.setAttribute("class", "book-image");
    cover.appendChild(imagen)

    const backCover = document.createElement("div");
    backCover.setAttribute("id", "backCover" + book.id);
    backCover.setAttribute("class", "backCover");
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
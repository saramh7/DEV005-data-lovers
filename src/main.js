import { buscar, ordenar, filtrar } from "./dataHandler.js"

//Elementos DOM en variable
const btnBuscar = document.getElementById("btnBuscar")
const bookTitle = document.getElementById("bookTitle")
const bookReleaseDay = document.getElementById("bookReleaseDay")
const bookAuthor = document.getElementById("bookAuthor")
const bookDescription = document.getElementById("bookDescription")
// const btnOrdenar = document.getElementsById("ordenar")
// const books = document.getElementsByName("books")

//Eventos del DOM
btnBuscar.addEventListener('click', buscarInfo)
// btnFiltrar.addEventListener('click',)
// btnOrdenar.addEventListener('click',)

//Funciones que interactuan con el DOM
function buscarInfo() {
  const resultado = buscar()
  bookTitle.innerText = resultado[0].title
  bookReleaseDay.innerText = resultado[0].releaseDay
  bookAuthor.innerText = resultado[0].author
  bookDescription.innerText = resultado[0].description
}
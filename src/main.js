import { buscar, ordenar, filtrar, buscarLibro } from "./dataHandler.js"

// **** Elementos DOM en variable ****
const booksContainer = document.getElementById("booksContainer")
const ordenarTitulo = document.getElementById("ordenarTitulo")
const filtroEdad = document.getElementById("filtroEdad")
const buscarLibros = document.getElementById("buscarLibros")
const btnBuscar = document.getElementById("btnBuscar")
const totalVentas = document.getElementById("totalVentas")
const chartContainer = document.getElementById("chartContainer")
const btnMostrarGrafico = document.getElementById("btnMostrarGrafico")
const btnOcultarGrafico = document.getElementById("btnOcultarGrafico")

const templateBook = document.getElementById("templateBook").content
const fragment = document.createDocumentFragment()


// **** Eventos del DOM ****
addEventListener("DOMContentLoaded", buscarInfo);
btnBuscar.addEventListener('click', mostrarTodo)
ordenarTitulo.addEventListener('change', ordenarPorTitulo)
filtroEdad.addEventListener('change', filtrarPorEdad)
buscarLibros.addEventListener('change', buscarPorLibro)
btnMostrarGrafico.addEventListener('click', mostrarGrafico)
btnOcultarGrafico.addEventListener('click', ocultarGrafico)


// **** Funciones que interactúan con el DOM ****
export function buscarInfo() {
  const resultado = buscar() //a const resultado, le estoy asignado el retorno de la función buscar

  insertarLibrosTemplate(resultado)
  insertarGrafico(resultado)
  ocultarGrafico()
}

function mostrarTodo() {
  const resultado = buscar() // a const resultado, le estoy asignado el retorno de la función buscar
  insertarLibrosTemplate(resultado)

  // Oculta Gráfico y limpia todos los elementos Select
  filtroEdad.value = ''
  ordenarTitulo.value = ''
  buscarLibros.value = ''
  ocultarGrafico()
}

function ordenarPorTitulo(event) {
  const valorSeleccionado = event.target.value; // rescata el valor que selecciona el usuario en el select

  if (valorSeleccionado === "") {
    const datosIniciales = buscar();
    insertarLibrosTemplate(datosIniciales)
    return
  }

  let resultado;
  if (valorSeleccionado === "A-Z")
    resultado = ordenar("a-z")
  else
    resultado = ordenar("z-a")

  insertarLibrosTemplate(resultado)

  // Oculta Gráfico y limpia otros elementos Select
  ocultarGrafico()
  filtroEdad.value = ''
  buscarLibros.value = ''
}

function filtrarPorEdad(event) {
  const valorSeleccionado = event.target.value;

  if (valorSeleccionado === "") {
    const datosIniciales = buscar();
    insertarLibrosTemplate(datosIniciales)
  } else {
    const resultado = filtrar(valorSeleccionado)// la variable resultado, guarda el retorno de la funcion filtrar.
    insertarLibrosTemplate(resultado)
  }

  // Oculta Gráfico y limpia otros elementos Select
  ocultarGrafico()
  ordenarTitulo.value = ''
  buscarLibros.value = ''
}

function buscarPorLibro(event) {
  const libroSeleccionado = event.target.value; //asigno una const al event

  if (libroSeleccionado === "") {
    const datoSeleccionados = buscar(); //la const va ser igul ala info
    insertarLibrosTemplate(datoSeleccionados) // se le asigna la info a la const
  } else {
    const resultado = buscarLibro(libroSeleccionado)//resultado guarda el retorno de la seleccion
    insertarLibrosTemplate(resultado) //resultado es donde alberga toda la data
  }

  // Oculta Gráfico y limpia otros elementos Select
  ocultarGrafico()
  ordenarTitulo.value = ''
  filtroEdad.value = ''
}

function insertarLibrosTemplate(arrayLibros) {
  booksContainer.innerHTML = '' // al asignar un texto vacío elimina todo lo que esté en el elemento Html de id=books. Esto es para que no se repita

  const books = document.createElement("div") // le estoy asignado crear un elemento div en Html (este div contendrá todo los libros)
  books.setAttribute("id", "books"); // le asigna al div creado un atributo id con valor books para invocarlo desde Js
  books.setAttribute("class", "books");//le asigna al div creado un atributo class con valor books  para invocarlo desde Css
  booksContainer.appendChild(books) // Inserta el div creado con los 2 atributos en el elemento con id booksContainer del Html

  arrayLibros.forEach(libro => {
    templateBook.querySelector(".book-image").setAttribute("src", "imagen/" + libro.image)
    templateBook.querySelector(".book-title").textContent = libro.title
    templateBook.querySelector(".book-release-day").innerHTML = `<b>Lanzamiento</b>: ${libro.releaseDay}`
    templateBook.querySelector(".book-author").innerHTML = `<b>Autor</b>: ${libro.author}`
    templateBook.querySelector(".book-age-recommended").innerHTML = `<b>Edad Recomendada</b>: ${libro.ageRecommended}`
    templateBook.querySelector(".book-description").textContent = libro.description

    const clone = templateBook.cloneNode(true)
    fragment.appendChild(clone)
  })

  books.appendChild(fragment)
}

function mostrarGrafico() {
  booksContainer.classList.add("div_hide");
  chartContainer.classList.remove("div_hide");

  btnMostrarGrafico.classList.add("div_hide");
  btnOcultarGrafico.classList.remove("div_hide");
}

function ocultarGrafico() {
  booksContainer.classList.remove("div_hide");
  chartContainer.classList.add("div_hide");

  btnOcultarGrafico.classList.add("div_hide");
  btnMostrarGrafico.classList.remove("div_hide");
}

function insertarGrafico(arrayLibros) {
  // Obtiene array sólo con nombres de libros
  const nombres = arrayLibros.map(libro => libro.title)

  // Obtiene array sólo con cantidad de libros vendidos
  const ventas = arrayLibros.map(libro => libro.bookSold)

  // Calcula el total de libros vendidos
  const sumaLibrosVendidos = ventas.reduce((acc, suma) => acc + suma, 0)

  totalVentas.innerText = `La cantidad total de libros vendidos es: ${sumaLibrosVendidos.toLocaleString("es")} copias`;

  // eslint-disable-next-line no-undef
  new Chart(chart, {
    type: 'pie',
    data: {
      labels: nombres,
      datasets: [{
        label: '# de ventas',
        data: ventas,
        backgroundColor: [
          'rgba(255, 99, 132)',
          'rgba(255, 159, 64)',
          'rgba(255, 205, 86)',
          'rgba(75, 192, 192)',
          'rgba(54, 162, 235)',
          'rgba(153, 102, 255)',
          'rgba(201, 203, 207)',
          'rgba(147, 198, 207)'
        ],
      }],
    }
  });
}
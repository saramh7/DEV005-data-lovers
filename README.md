 # Proyecto Data Lovers - Harry Potter

## Introducción 

  Nuestro proyecto es una página web que permite visualizar la data de la sección de libros de Harry Potter.
Esta pagina proporciona información para  aquellos que están comenzando su interacción con esta saga, para aquellos  
que tuvieron su primer encuentro con las películas y ahora quieren ser mas exactos en la secuencia de 
las historias como aquellos que solo por curiosidad quieren conocer los libros.
  La pagina proporciona información sobre los siguientes items  : año de publicación, autor, descripción del libro, 
número de ventas por libros y edad recomendada.
  Nuestra página permite interactuar con el usurario, el cual puede : buscar,  filtrar,  ordenar los libros y ademas ver el total de libros vendidos en la saga.

### Definición del producto

    En el proceso de diseño,  pensamos en  una pagina donde la información que se solicita ver 
  estuviera disponible al ingresar a ella, un menú que fuera accesible y fácil de visualizar para el usuario,
  con colores e imágenes relacionadas a la temática de la saga.

  Nuestra pagina resuelve el problema que lo usuarios tienen al querer comenzar a leer esta saga, al ser 8 libros es fácil confundirse y no tener claridad por donde comenzar, nuestra pagina muestra los libros con su descripción respectiva , ademas para los padres, el filtro "edad recomendada" les da información sobre que libro es adecuado para sus hijos.


### Requisitos Solicitados

- Nuestro trabajo incluye, bocetos y fotos de prototipos de baja y alta fidelidad. Los prototipos de alta fidelidad
  se [trabajaron en Figma](https://www.figma.com/file/ijkT36AZMjAyWD3STYQLge/Harry-Potter?node-id=0%3A1&t=SyfdPiLjhgx6w1DK-1) e incluyen las interacciones de la pagina y las distintas resoluciones, cumpliendo el criterio de responsive. Las Historias de usuarios se trabajaron en [Trello](https://trello.com/b/kLZDGcTZ/general).
  Si necesitas acceso a ver nuestro Trello, por favor contáctanos.  

Nuestra  implementación cumple con los siguientes requisitos:

1. Mostrar la data en una interfaz por medio de  cards.
2. Permitir al usuario interactuar para obtener la información que necesita, por medio de los 
3. botones, filtrar, ordenar, buscar y mostrar gráfico.
4. Es _responsive_, se visualiza sin problemas desde distintos
   tamaños de pantallas: móviles, tablets y desktops.


### Pruebas unitarias

Nuestra pruebas unitarias cumplen con la cobertura de 

- 93% _statements_
- 83% _branches_
- 100% _functions_
- 93% _lines_
 
 Problemas detectados en los test :

 - No se especifica la cantidad de libros existentes en la data
 - No indica si las propiedades cambian al modificar la data.
 - No indica error al ingresar parámetros no existentes en la funciones.
- 
  

## 9. Checklist

* [x] Usa VanillaJS.
* [x] Pasa linter (`npm run pretest`)
* [x] Pasa tests (`npm test`)
* [x] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [x] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [x] Incluye historias de usuario en `README.md`.
* [x] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [x] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [x] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [x] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [x] UI: Permite ordenar data por uno o más campos (asc y desc).
* [x] UI: Permite filtrar data en base a una condición.
* [x] UI: Es _responsive_.

Para acceder al proyecto desplegado [Haga clik aqui](https://saramh7.github.io/DEV005-data-lovers/)
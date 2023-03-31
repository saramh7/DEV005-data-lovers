 # Proyecto Data Lovers - Harry Potter

## Introduccion 

  Nuestro proyecto es una página web que permite visualizar la data de la sección de libros de Harry Potter.
Esta pagina proporciona información para  aquellos que están comenzando su interacción con esta saga, para aquellos  
que tuvieron su primer encuentro con las peliculas y ahora quieren ser mas exactos en la secuencia de 
las historias como aquellos que solo por curiosidad quieren conocer los libros.
La pagina proporciona información sobre los siguientes item : año de publicación, autor, descripción del libro, 
número de ventas por libros y edad recomendada.
Nuestra página permite interactuar con el usurario, el cual puede : buscar,  filtrar,  ordenar los libros y ademas ver el total de libros vendidos en la saga.

### Definición del producto

En el proceso de diseño pensamos en  una pagina donde la información que se solicita ver 
estuviera disponible al ingresar a ella, un menú que fuera accesible y fácil de visualizar para el usuario,
con colores e imagenes relacionadas a la temática de la saga.

  Nuestra pagina resuelve el problema que lo usuarios tienen al querer comenzar a leer esta saga, al ser 8 libros es facil confundirse y no tener claridad por donde comenzar, nuestra pagina muestra los libros con su descripcion respectiva , ademas para los padres, el filtro "edad recomendada" les da informacion sobre que libro es adecuado para sus hijos.


### Requisitos Solicitados

- Nuestro trabajo incluye, bocetos y fotos de prototipos de baja y alta fidelidad. Los protipos de alta fidelidad
  se trabajaron en Figma e incluyen las interacciones de la pagina y las ditintas resoluciones, cumpliendo el criterio de responsive.


Nuestra  implementación cumple con los siguientes requisitos:

1. Mostrar la data en una interfaz por medio de puede  cards.
2. Permitir al usuario interactuar para obtener la infomación que necesita, por medio de los 
3. botones, filtrar, ordenar, buscar y mostrar gráfico.
4. Es _responsive_, se visualiza sin problemas desde distintos
   tamaños de pantallas: móviles, tablets y desktops.


### Pruebas unitarias

Nuestra pruebas unitarias cumplen con la cobertura del 
para las funciones de 

funciones encargadas de  _procesar_,
_filtrar_ y _ordenar_ la data, así como _calcular_ estadísticas.

Tus _pruebas unitarias_ deben dar una cobertura del 70% de _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
(_ramas_) del archivo `src/data.js` que contenga tus funciones y está detallado
en la sección de [Consideraciones técnicas](#srcdatajs).

El corazón de este proyecto es la manipulación de datos a través de arreglos
y objetos.




### `test/data.spec.js`

Tendrás también que completar las pruebas unitarias de las funciones
implementadas en el archivo `data.js`.







## 9. Checklist

* [ ] Usa VanillaJS.
* [ ] Pasa linter (`npm run pretest`)
* [ ] Pasa tests (`npm test`)
* [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [ ] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [ ] Incluye historias de usuario en `README.md`.
* [ ] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [ ] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [ ] Incluye link a Zeplin en `README.md`.
* [ ] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [ ] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [ ] UI: Permite ordenar data por uno o más campos (asc y desc).
* [ ] UI: Permite filtrar data en base a una condición.
* [ ] UI: Es _responsive_.

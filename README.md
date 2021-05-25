# REVERSE WORD (FRONT END)
## Información general
Este programa esta diseñado para comuncarse con el api que ofrece la aplicación REVERSE WORD (BACK END).

Consiste en una aplicación desarrollada con React y consta de tres componentes principales: 

1) Topbar: Este componente consta de un cuadro de texto en el cual el usuario puede escribir y un botón el cual toma el texto escrito y lo envia al API.

2) MainScreen: Este componente muestra los resultados de las palabras al reves devueltas por el api mediente el uso del componente Item

3) Item: Este componente se encarga de la renderización de la lista de textos al revez devueltos por el API

Además de esto la aplicación esta diseñada con Redux y consta de un solo reducer denominado reverseWordReducer el cual tiene el siguiente estado:
 ```
 const initialState = {
     words: []
 }
  ```
  Que consiste en una lista de palabras que mantendra en memoria la aplicación.
  
  Adicionalmente está app cuenta con un módulo de pruebas desarrollado con jest.

  Cabe decir que la aplicación corre en el puerto 3000.

  A continuación se muestran los comandos para correr la aplicación y su módulo de pruebas.
## Run instructions
Para correr la aplicación se utiliza el siguiente comando:
* npm start

Para correr el módulo de pruebas se utiliza el siguiente comando:
* npm test 

# Autor
Diego Muñoz
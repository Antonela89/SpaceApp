//--------------Callbacks---------------------
//Callbacks: Los Callbacks en Javascript son, de hecho, funciones que se pasan como argumentos a otras funciones y se ejecutan después de que esa función haya terminado.

function uno (dos) {
    console.log("uno")+
    setTimeout(dos, 2000)
}

function dos () {
    console.log("dos")
}

//las funciones uno y dos son funciones sincronas

setTimeout(() => uno(dos), 5000)

// setTimeout es una funcion asincrona y a la vez es un callback porque recibe otra función como parámatro
// si paso la funcion como parametro con parametros en el callback con parentesis se ejecuta como una funcion sincrona y no es lo que queremos, para que sea asincronico, se debe pasar sin los parantesis

//--------------Función anónima---------------------
//no lleva nombre

const nombre = function () {
    console.log('nombre')
}

nombre();

//--------------arrow functions---------------------
// si la arrow function ocupa una linea de código no es necesario el par de llaves {}
// si la arrow function ocupa mas de una linea si es necesario el par de llaves {} para encapsular el bloque de código

const persona = () => console.log('Antonela')
persona();


() => console.log('Computadora');

//--------------Callback hell---------------------
//Anidar muchas funciones de retorno de llamada dentro de una función principal puede llevar a un problema llamado 'Callback Hell', que hace que el código sea difícil de leer y entender.
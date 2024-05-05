const url = "https://api.nasa.gov/planetary/apod?api_key=chnCqexlKKTygG4Geo3rNlmooerpSYhlhDGKeK2v&count=15"

//Fetch API: recibe dos argumentos: la url y los encabezados de la peticion, si no estan entiende que se esta haciendo una peticion GET
//el fetch devuelve una promesa
//la promesa (estado pendiente) puede ser resuelta (resolved) o rechazada(rejected)

//estructura de una promesa:
// const solicitud = new Promise((resolve, reject) => {
//     const response = 'resolve'
//     if(response == 'resolve') {
//          reject('La promesa se cumplió')
//     } else {
//         reject('La promesa no se cumplió')
//     }
// })

// console.log(solicitud)

//-------------------then y catch-------------------------

//para atrapar la promise resolve se usa .then y para la promise reject se usa .catch

// function listaImagenes() {
//     fetch(url)
//     .then(response => response.json())
//     .then(datosImagenes => {
//         console.log('datosImagenes: ', datosImagenes)

//         const card = document.querySelector('[data-ul]')

//         datosImagenes.forEach(element => {
//             const contenido = 
//             `<li class="card">
//                 <img class="card__image" src="${element.url}" alt="imagen">
//                 <h3 class="card__title">${element.title}</h3>
//             </li>
//             `
//             card.innerHTML += contenido;
//         });
//     })
//     .catch(error => console.log(error))
// }

// listaImagenes();


//-------------------async y await-------------------------

async function listaImagenes( ){
    try {
        let fetchImagen = await fetch(url)
        let datosImagenes = await fetchImagen.json()

        console.log(datosImagenes);

        const card = document.querySelector('[data-ul]')

        datosImagenes.forEach(element => {
            const contenido = 
            `<li class="card">
                <img class="card__image" src="${element.url}" alt="imagen">
                <h3 class="card__title">${element.title}</h3>
            </li>
            `
            card.innerHTML += contenido;
        });

    } catch (error) {
        console.log(error);
    }
}

listaImagenes();
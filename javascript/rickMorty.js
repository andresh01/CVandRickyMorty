let nextPag; //variable donde se almacena la url de la proxima pagina
let previousPag; //variable donde se almacena la url de la pagina anterior

//obtencion de los elementos nav del html
const female = document.getElementById('female');
const male = document.getElementById('male');
const allc = document.getElementById('allc');
const alive = document.getElementById('alive');
const dead = document.getElementById('dead');
const next = document.querySelector('.next');
const previous = document.querySelector('.previous');

//evento que escucha cuando se oprime el boton next y envia el jquery a la funcion info()
//realiza la validacion si hay siguiente pagina o no
next.addEventListener('click', () => {
    if (nextPag != null) {
        info(nextPag);
    }
})

//evento que escucha cuando se oprime el boton previous y envia el jquery a la funcion info()
//realiza la validacion si hay pagina anterior o no
previous.addEventListener('click', () => {
    if (previousPag != null) {
        info(previousPag)
    }
})

//Evento que escucha cuando se oprime el boton de busqueda 
female.addEventListener('click', function () {
    info('https://rickandmortyapi.com/api/character/?gender=Female');
});

male.addEventListener('click', function () {
    info('https://rickandmortyapi.com/api/character/?gender=Male');
});

alive.addEventListener('click', function () {
    info('https://rickandmortyapi.com/api/character/?status=Alive');
});

dead.addEventListener('click', function () {
    info('https://rickandmortyapi.com/api/character/?status=Dead');
});

allc.addEventListener('click', function () {
    info('https://rickandmortyapi.com/api/character/');
});

//funcion para consumir la API e insertar los datos al HTML
function info(url) {

    fetch(url)

        .then(response => response.json())
        .then(data => {

            nextPag = data.info.next; //obtiene la url de la proxima pagina 
            previousPag = data.info.prev;

            data.results.forEach(personaje => {

                const div = document.createRange().createContextualFragment(`
                        <div class="boxRM">
                            <div class="divName">
                                <h2 id="name1">${personaje.name}</h2>
                            </div>
                            <div>
                                <img class="img" id="imgRM1" src="${personaje.image}" alt="imagen">
                            </div>
                            <h3 class="divGenero">  ${personaje.gender}</h3>
                            <h3 class="divStatus">${personaje.status}</h3>
                        </div>
                    `);

                const information = document.querySelector('.targets')
                information.append(div); //inserta los nodos contenicod en la variable div al html
            });


        }).catch(error => {
            document.querySelector('.targets').innerHTML = `Error conectando con la API ${error}`
        })

    removeCards(); //borra las cartas anteriores
    //Activa los botones next y previous cuando se elije los personajes
    let buttons = document.querySelector('.contenedorbotones')
    buttons.classList.add('activeButtons')
}


function removeCards() {
    const cards = document.querySelector('.targets').innerHTML = "";
}





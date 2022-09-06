var pagActual = ""; //variable global para saber la busqueda que actualmente se esta realizando
let contPage = 1; //variable global para inicializar la funcion de incremento de paginas

//obtencion de los elementos nav del html
const female = document.getElementById('female');
const male = document.getElementById('male');
const allc = document.getElementById('allc');
const alive = document.getElementById('alive');
const dead = document.getElementById('dead');
const next = document.querySelector('.next');
const previous = document.querySelector('.previous');

//evento que escucha cuando se oprime el boton next y envia el jquery a la funcion info()
//el + es un parametro para que la funcion changePage sepa que tiene que aumentar las paginas
next.addEventListener('click', () => {
    if (pagActual == "female") {
        info('Female', '', changePage('+'))
    } else if (pagActual == "male") {
        info('Male', '', changePage('+'))
    } else if (pagActual == "dead") {
        info('', 'Dead', changePage('+'))
    } else if (pagActual == "alive") {
        info('', 'Alive', changePage('+'))
    } else if (pagActual == "allc") {
        info('', '', changePage('+'))
    }
})

//evento que escucha cuando se oprime el boton previous y envia el jquery a la funcion info()
//el - es un parametro para que la funcion changePage sepa que tiene que disminuir las paginas
previous.addEventListener('click', () => {
    if (pagActual == "female") {
        info('Female', '', changePage('-'))
    } else if (pagActual == "male") {
        info('Male', '', changePage('-'))
    } else if (pagActual == "dead") {
        info('', 'Dead', changePage('-'))
    } else if (pagActual == "alive") {
        info('', 'Alive', changePage('-'))
    } else if (pagActual == "allc") {
        info('', '', changePage('-'))
    }
})


//Evento que escucha cuando se oprime el boton de busqueda.
//Se le asigna el valor a la variable pagActual dependiando el boton de busqueda seleccionado 
female.addEventListener('click', function () {
    pagActual = "female"
    contPage = 1;
    info('Female', '', '');
});


male.addEventListener('click', function () {
    pagActual = "male"
    contPage = 1;
    info('Male', '', '');
});

alive.addEventListener('click', function () {
    pagActual = "alive"
    contPage = 1;
    info('', 'Alive', '');
});

dead.addEventListener('click', function () {
    pagActual = "dead"
    contPage = 1;
    info('', 'Dead', '');
});

allc.addEventListener('click', function () {
    pagActual = "allc"
    contPage = 1;
    info('', '', '');
});

//funcion para consumir la API e insertar los datos al HTML
function info(gender, status, changePage) {
    
    const api = `https://rickandmortyapi.com/api/character/?gender=${gender}&status=${status}&page=${changePage}`;

    fetch(api)
        .then(response => response.json())
        .then(data => {

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
                information.append(div);
            });


        }).catch(error => {
            document.querySelector('.targets').innerHTML = `Error conectando con la API ${error}`
        })
        
    removeCards(); //borra las cartas anteriores
    let buttons = document.querySelector('.contenedorbotones')
    buttons.classList.add('activeButtons')
}


function removeCards() {
    const cards = document.querySelector('.targets').innerHTML = "";
}



//Funcion que se encarga de incrementar o decrementar las paginas segun el parametro que le pase
function changePage(operador) {
    num = contPage;

    if (operador == '+') {
        num = num + 1;
        contPage = num;
        return num
    } else if (operador == '-') {
        if (num <= 1) { num = 2;} //condicional para que el valor del contador no se dismunuya mas de 2 cuando se oprime previous 
        num = num - 1;
        contPage = num;
        return num
    }
}


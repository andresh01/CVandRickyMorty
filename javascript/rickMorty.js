let acu = 0;


window.addEventListener('DOMContentLoaded', inicio);

function inicio() {

    const div = document.createRange().createContextualFragment(`
                    <div class="textInicio">
                        <div>
                            Choose any of the catergories above
                            and learn more about Rick and Morty characters.
                        </div>
                    </div>
                 `);

    const information = document.querySelector('.targets')
    information.append(div);

}

const female = document.getElementById('female');
const male = document.getElementById('male');
const allc = document.getElementById('allc');
const alive = document.getElementById('alive');
const dead = document.getElementById('dead');



female.addEventListener('click', function () {
    
    info('https://rickandmortyapi.com/api/character/?gender=Female');
    borrar()
});


male.addEventListener('click', function () {
    info('https://rickandmortyapi.com/api/character/?gender=Male');
    borrar()
});

alive.addEventListener('click', function () {
    info('https://rickandmortyapi.com/api/character/?status=Alive');
    borrar()
});

dead.addEventListener('click', function () {
    info('https://rickandmortyapi.com/api/character/?status=Dead');
    borrar()
});

allc.addEventListener('click', function () {
    info('https://rickandmortyapi.com/api/character');
    borrar()
});

function info(url) {

    const api = url;

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
                            <div class="divGenero">  ${personaje.gender}</div>
                            <div class="divStatus">${personaje.status}</div>
                        </div>
                    `);

                const information = document.querySelector('.targets')
                acu = acu + 1;
                information.append(div);
            });


        }).catch(error => {
            document.getElementById('name1').innerHTML = "Error de datos"
        })


    for (let i = 0; i < acu; i++) {
        const padre = document.querySelector('.targets')
        const hijo = document.querySelector('.boxRM')
        padre.removeChild(hijo)

    }

}



function borrar(){
    const padre = document.querySelector('.targets')
        const hijo = document.querySelector('.textInicio')
        padre.removeChild(hijo)
}

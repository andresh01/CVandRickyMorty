var pagActual="";

const female = document.getElementById('female');
const male = document.getElementById('male');
const allc = document.getElementById('allc');
const alive = document.getElementById('alive');
const dead = document.getElementById('dead');
const next = document.querySelector('.next');
const previous = document.querySelector('.previous');

next.addEventListener('click', () => {
    if (pagActual=="female") {   
        info('Female', '', changePage('+'))       
    } else if(pagActual=="male"){
        info('Male', '', changePage('+'))
    } else if(pagActual=="dead"){
        info('', 'Dead', changePage('+'))
    } else if(pagActual=="alive"){
        info('', 'Alive', changePage('+'))
    } else if(pagActual=="allc"){
        info('', '', changePage('+'))
    }   
})

previous.addEventListener('click', () => {
    if (pagActual=="female") {
        info('Female', '', changePage('-'))
    } else if(pagActual=="male"){
        info('Male', '', changePage('-'))
    } else if(pagActual=="dead"){
        info('', 'Dead', changePage('-'))
    } else if(pagActual=="alive"){
        info('', 'Alive', changePage('-'))
    } else if(pagActual=="allc"){
        info('', '', changePage('-'))
    }   
})



female.addEventListener('click', function () {
    pagActual="female"
    info('Female', '', '');
});


male.addEventListener('click', function () {
    pagActual="male"
    info('Male', '', '');  
});

alive.addEventListener('click', function () {
    pagActual="alive"
    info('', 'Alive', '');   
});

dead.addEventListener('click', function () {
    pagActual="dead"
    info('', 'Dead', '');   
});

allc.addEventListener('click', function () {
    pagActual="allc"
    info('', '', '');  
});


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

        removeCards();

}


function removeCards() {
    const cards = document.querySelector('.targets').innerHTML = "";
}


let contPage=1;
function changePage(operador) {
        num=contPage;
       
        if (operador == '+') {
            num = num + 1;
            contPage = num;
            return num 
        } else if(operador == '-'){
            num = num - 1;
        contPage = num;
        return num
        } 
}


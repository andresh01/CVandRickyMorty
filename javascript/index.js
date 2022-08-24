


const botonchange = document.getElementById("button");

botonchange.addEventListener("click", cambio);

function cambio() {

    let body = document.querySelector('.body')
    body.classList.toggle('change-mode-body')

    let textomain = document.querySelectorAll('.size')
    textomain.forEach(element => {
        element.classList.toggle('change-mode-size')
    });

    let letrasnav = document.querySelectorAll('a')
    letrasnav.forEach(element => {
        element.classList.toggle('change-mode-a')
    }); 
     
    let cajaexperiencia = document.querySelectorAll('.small-box')
    cajaexperiencia.forEach(element => {
        element.classList.toggle('change-mode-small-box')
    });




}



window.addEventListener('DOMContentLoaded', chistesAleatorios)

const botton = document.getElementById("oneMore");

botton.addEventListener('click', chistesAleatorios)


function chistesAleatorios() {
    const endPoint = 'https://api.dadjokes.io/api/random/joke';

    fetch(endPoint)
        .then(response => response.json())
        .then(data => {
            document.getElementById("chiste").textContent = data.body[0].setup
            document.getElementById("respuesta").textContent = data.body[0].punchline
        }).catch(error => {
            document.getElementById("chiste").textContent = "Upss, Parece que no estamos de humor"
        })
} 
const titulo = document.querySelector('#titulo');
const body = document.querySelector('body');
const button = document.querySelector('button');


let ChangeAzul = () =>  {
    removeAll();
    body.classList.add('azul');
}

let ChangeLaranja = () =>  {
    removeAll();
    body.classList.add('laranja');
}

let ChangeAmarelo = () =>  {
    removeAll();
    body.classList.add('amarelo');
}

let ChangePreto = () =>  {
    removeAll();
    body.classList.add('preto');
}

let ocultar = () =>  {
    ocultarNone();
    body.style.display = 'none';
}

function removeAll() {
    body.classList.remove('azul');
    body.classList.remove("laranja");
    body.classList.remove('amarelo');
    body.classList.remove('preto');
}


function ocultarNone() {
    setInterval(() => {
        body.style.display = 'flex'
    }, 2000);
}


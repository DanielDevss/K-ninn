let btnMenu = document.querySelector('#btnMenu');

let menu = document.querySelector('#menuEnlaces');

let spanMenu = document.querySelector('.spanMenu');

let bnnBtns = document.querySelector('.banner__buttons');

btnMenu.addEventListener('click', () => {
    if(spanMenu.textContent === 'Menú'){
        abrirMenu();
    }else{
        cerrarMenu();
    }
})

function abrirMenu(){
    menu.classList.add('navbar__seccion--active');
    spanMenu.textContent = 'Cerrar';
    bnnBtns.hidden = true;
}
function cerrarMenu(){
    menu.classList.remove('navbar__seccion--active');
    spanMenu.textContent = 'Menú';
    bnnBtns.hidden = false;
}
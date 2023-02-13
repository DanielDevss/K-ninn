let btndropExp = document.querySelector('#dropdownExp');
let dropOptExp = document.querySelector('#optionsDropdownExp');

let isOpenDropExp = false;

btndropExp.addEventListener('click', () => {
    if(isOpenDropExp){
        cerrarDropExp();
    }else{
        abrirDropExp();
    }
});


function abrirDropExp(){
    dropOptExp.classList.add('dropdownReserva__options--active');
    btndropExp.classList.add('bg-orange');
    isOpenDropExp = true;
}

function cerrarDropExp(){
    dropOptExp.classList.remove('dropdownReserva__options--active');
    btndropExp.classList.remove('bg-orange');
    isOpenDropExp = false;
}


function openAndClose( seccion ){
    let drop = document.querySelector(`.${seccion}`);
    let dropList = document.querySelector(`.${seccion}List`);
    let width = drop.clientWidth;

    if(!drop.classList.contains('enlaceNav--active')){
            drop.classList.add('enlaceNav--active')
            dropList.style.display = 'block'
            dropList.style.width = `${width}px`
    }else{
        drop.classList.remove('enlaceNav--active')
        dropList.style.display = 'none'
        dropList.style.width = `${width}px`
    }
}


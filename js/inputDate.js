let d1 = document.querySelector('#date1');
let d2 = document.querySelector('#date2');


d1.addEventListener('change', () => {
    console.log(d1.value);
    if(d1.value === ''){
        formatDate(1);
    }else{
        separarDate(1)    
    }
});

d2.addEventListener('change', () => {
    console.log(d2.value);
    if(d2.value === ''){
        formatDate(2);
    }else{
        separarDate(2)    
    }
});


function separarDate(num){
    let aa = document.querySelector(`#input${num} .aa`);
    let mm = document.querySelector(`#input${num} .mm`);
    let dd = document.querySelector(`#input${num} .dd`);

    let inp = document.querySelector(`#date${num}`);

    aa.textContent = inp.value[2]+''+inp.value[3];
    mm.textContent = inp.value[5]+''+inp.value[6];
    dd.textContent = inp.value[8]+''+inp.value[9];

}


function formatDate(num){
    let aa = document.querySelector(`#input${num} .aa`);
    let mm = document.querySelector(`#input${num} .mm`);
    let dd = document.querySelector(`#input${num} .dd`);

    aa.textContent = 'AA';
    mm.textContent = 'MM';
    dd.textContent = 'DD';
}


/* ! Input añadir k-niños */

let inpCount = document.querySelector('#addKnino');
let btnAdd = document.querySelector('#countKninoAdd .btnAdd');
let btnRemove = document.querySelector('#countKninoAdd .btnRemove');

inpCount.value = 0;


countKnino();

function countKnino(){
    btnAdd.addEventListener('click', (e) => {
        inpCount.value ++;
    }); 
    btnRemove.addEventListener('click', (e) => {
        inpCount.value --;
        if(inpCount.value < 0){
            inpCount.value = 0
        }
    }); 
}
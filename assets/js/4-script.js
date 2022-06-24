const cajaUno = document.querySelector('#caja-1');
const cajaDos = document.querySelector('#caja-2');
const cajaTres = document.querySelector('#caja-3');
const cajaCuatro = document.querySelector('#caja-4');

let ColorFinal = "";

document.addEventListener('keydown',function(event) {
    if (event.key === 'a') {
        ColorFinal = "blue"
    } else if (event.key === 's') {
        ColorFinal =  "aliceblue"
    } else if (event.key === 'd') {
        ColorFinal = "green"
    } else {
        ColorFinal = ""
    }
    console.log("el color seleccionado es " + ColorFinal)
})

function cambioColor(elem) {
    if (ColorFinal == "") {
        elem.style.backgroundColor = "brown";
        return;
    } 
        elem.style.backgroundColor = ColorFinal
}

cajaUno.addEventListener('click', function(){
    cambioColor(cajaUno)
})
cajaDos.addEventListener('click', function(){
    cambioColor(cajaDos)
})
cajaTres.addEventListener('click', function(){
    cambioColor(cajaTres)
})
cajaCuatro.addEventListener('click', function(){
    cambioColor(cajaCuatro)
})
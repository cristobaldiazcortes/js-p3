/*
function pintar(){
    ele = document.getElementById("ele1")
    ele.style.backgroundColor = 'yellow'
    }
    ele = document.getElementById("ele1")
    ele.addEventListener("click", pintar);*/

function pintar(ele,color){
    ele.style.backgroundColor = color
    }
    var color="yellow";
    ele = document.getElementById("ele1")
    ele.addEventListener("click", function() {
    pintar(ele,color)
    });
        
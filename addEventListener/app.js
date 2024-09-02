

function wrapper() {
      
    let blok = document.createElement("div");
    blok.classList.add("blok");    
    blockCurrent.style.background = "red";
}


let blockCurrent = document.querySelector(".wrapper"); 

let btn = document.getElementById('funcAdd');
//let btnRemove = document.getElementById('funcRemove');


btn.addEventListener('click', function(){
    blockCurrent.classList.toggle('newClass');
});

/*

btnRemove.addEventListener('click', function(){
    blockCurrent.classList.remove('newClass');
});

*/

blockCurrent.addEventListener('mouseover', function(){
    this.style.background = 'grey';
});
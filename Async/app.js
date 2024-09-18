/*
function info() {
    console.log("lesson setInterval()")
}

let infoMessage = setInterval(function(){
    console.log("lesson setInterval")
},1000);


setTimeout(function(){
    clearInterval(infoMessage)
    console.log("function infoMessage out")
}, 5000);

*/

function toggleBox(){
    let container = document.querySelector(".container")
    container.style.width = "250px";
    container.style.height = "250px";
    container.style.backgroundColor = "blue";

    let isVisible = false;

    const stop = setInterval(function(){
        if (isVisible) {
            container.style.opacity = "0";
        }else{
            container.style.opacity = "1";
        }
        isVisible = !isVisible
    },500)

    setTimeout(function(){        
        clearInterval(stop)         
        alert('Stop function');

    }, 6000);


}
toggleBox()
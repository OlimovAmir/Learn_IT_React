/*// Функция, которая будет вызвана при нажатии клавиши
function handleKeydown(event) {
    // Выводим информацию о нажатой клавише в консоль
    console.log('Key pressed:', event.key);
    console.log('Key code:', event.keyCode); // Deprecated, но все еще поддерживается
    console.log('Alt key:', event.altKey);
    console.log('Ctrl key:', event.ctrlKey);
    console.log('Shift key:', event.shiftKey);
}

// Добавляем обработчик события keydown для всего документа
document.addEventListener('keydown', handleKeydown);

*/

function message() {
   
    let sum1 = 152;
    let sum2 = 85;
    console.log(sum1 + sum2)
    return sum1 + sum2;
}


function message2(text) {
    
    console.log(" Ваши Веденные данне: " + text)
}


function data(params) {
    
    if(params > 18){
        message2(params)
    }else{
        console.log("Данные не правильно")
    }  
}


// function messageConsol(){
//     let num1 = document.getElementById("num1").value
//     let num2 = document.getElementById("num2").value
//     let convertNum1 = parseInt(num1) 
//     let convertNum2 = parseInt(num2) 
//     console.log(convertNum1 + convertNum2);
// }
function messageConsol(){
    let base = prompt("Введите данные!")
    let convertNum1 = parseInt(base) 
    console.log('Тип данных:', typeof convertNum1);
}
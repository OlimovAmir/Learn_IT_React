let age = 25;

if (age == 25) {
    // console.log("Возраст подходит")
} else {
    console.log("Возраст НЕ подходит")
}


function weekDay() {
    let weekDay = prompt("введите число день недели ")
    switch (weekDay) {
        case "1":
            alert('Сегодня понедельник')
            
            break;
        case "2":
            console.log('Сегодня вторник')
            break;
        case "3":
            console.log('Сегодня среда')
            break;
        case "4":
            console.log('Сегодня черверг')
            break;
        case "5":
            console.log('Сегодня Пятница')
            break;
        case "6":
            console.log('Сегодня Суббота')
            break;
        case "7":
            console.log('Сегодня воскресенье')
            break;
        default:
            console.log('Значение не верно')
            break;
    }

}

function message() {
    alert('Welcome')
};


function  message2(name) {
    alert(`Welcome ${name}`)
}

// console.log(message2('Jamshed'));


function add(a, b) {
    let result = a + b

    console.log(result);
}

add(25, 89)


 function sum() {
    let num1 = prompt('Задавайте первое число');
    let resultNum1 = Number(num1);

    let num2 = prompt('Задавайте второе число');
    let resultNum2 = Number(num2);

    function summ(a, b) {
        let result = a + b        
        alert(`результат суммирование ${result}`)
    }

     let resultFunc = summ(resultNum1, resultNum2)

    return  resultFunc;
    
}
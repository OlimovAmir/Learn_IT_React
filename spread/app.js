let numbers = [12, 23, 45, 56];


let newNum = [...numbers, 98, 63, 78];

console.log(newNum);

let objPerosn = {
    firstName: 'Boby',
    lastName: 'Akshay',
}
console.log(objPerosn);
let newInfoPerson = { ...objPerosn, age: 25 }

console.log(newInfoPerson);

console.log(Math.max(...numbers))
console.log(Math.sqrt(20));
console.log(Math.pow(3, 5));
console.log(Math.random());

function randomInt(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(randomInt(1, 25));
//  -----------------------------------------------------------------------

let currenDate = new Date();
console.log(currenDate);

currenDate.getFullYear

console.log("Год: " + currenDate.getFullYear());
console.log("Месяц", currenDate.getMonth() + 1);
console.log("Дата", currenDate.getDate());
console.log("Час", currenDate.getHours());
console.log("Минут", currenDate.getMinutes());

let seconds = currenDate.getSeconds(); 
console.log("Секунд", seconds);

//console.log(...numbers);
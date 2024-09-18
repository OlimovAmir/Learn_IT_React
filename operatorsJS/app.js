//let test = prompt(hgjjjjhfgf)
const sum1 = 5;
const sum2 = 2;
console.log(sum1 + sum2)


const sum3 =55
const sum4 =15

console.log("minus"+(sum4 - sum3))

console.log(sum3 * sum4)

console.log(sum4 / sum3)

if (sum3 > 25) {
    console.log("Ин 25 баробар")
}else{
    console.log("Нодуруст")
}


let age = 19


if (age <=18){
   // alert("Вход запрещен!")
}
else if(age > 18){
    //alert("Добро пожаловать")
}

// Остаток от деление %

let a = 10;
let b = 2;

let result = a % b;

console.log(`Результат остаток от деление  ${a} % ${b} : = ` + result);

// 	&& — логическое И
let agePerson = 25; 

let isLisiens = true


if (agePerson > 21  && isLisiens == true) {
    console.log('Вам можно водить авто')
} else {
    console.log('Вождение запрешено')
}

//	|| — логическое ИЛИ

let isWeekend = true;

let isHoliday = false;

if (isWeekend == true  || isHoliday == true) {
    console.log('Сегодня выходной')
} else {
    console.log('Ещё работаем')
}

// 	! — логическое НЕ

if (isWeekend == !true ) {
    console.log('Корба биё')
} else {
    console.log('Ещё работаем')
}


let isRaining = false;

if (!isRaining) {
  console.log("Можно идти на прогулку, дождя нет.");
} else {
  console.log("Придется остаться дома, идет дождь.");
}



let i = 1;
while (i <= 5) {
    console.log("цикл номер =>" + i);
    i++;
}

let input = "";
while (input !== "exit") {
    input = prompt("Введите команду (для выхода введите 'exit'):");
}

console.log("------------------------------------------------------")
let number2 = parseInt(prompt("Введите число:"), 10);
let number = 1;

while (number <= number2) {
    if (number % 3 === 0) {
        console.log(number);
    }
    number++;
}


console.log("------------------------------------------------------")
let numbers = [10, 20, 30, 40, 50];
let index = 0;
while (index < numbers.length) {
    console.log(numbers[index]);
    index++;
}

console.log("------------------------------------------------------")
let a = 1;
while (a <= 3) { // 1 
    let row = "";  // Строка для хранения одной строки таблицы
    let b = 1;
    while (b <= 10) {
        row += (a * b).toString() + "\t";  // Добавляем произведение и табуляцию
        b++;
    }
    console.log(row);  // Выводим всю строку сразу
    a++;
}
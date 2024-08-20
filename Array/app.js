//   Что такой массив , для чего он нужен, какие бывает свойство и методы


const   arr = [25, "Name", {name: 'Shwarc'}, [54], false ];

console.log(arr);

arr.forEach(elem =>{
    console.log(typeof elem)
    
})


const numbers = [0, 1, 2, 3, 4, 5]; // это массив чисел 

console.log(numbers.length) // определить количество массива

console.log(numbers[1]) // найти элемент из массива по индексу

const sliced =  numbers.slice(2);  // передаёт данный массива без начало двух элементов
const sliced2 =  numbers.slice(-3); // ПРЕДОСТАВЛЯЕТ два последние элемента, счет идёт с конца массива

const sliced3 =  numbers.slice(0, 5);

console.log(sliced);
console.log(sliced2);
console.log(sliced3);

const arrV2 = [[1,2,3], [4,5,6], []] // двухмерный массив
const obj = [
    {
        id: 1,
        lastName: 'Dlon'

    },
 {}, {}, {}];

let person = {
    firstName: 'Amir',
    age: 25,
    speed: 300,
}
let employee = {
    salary: 5000,
}
console.log(person)

// Устанавливаем employee как прототип для person
Object.setPrototypeOf( employee, person);

// Теперь person наследует свойства от employee
console.log(employee.age); // выдал undefined



let employee2 = Object.create(person, {
    firstName: { value: 'Roy', enumerable: true },
    age: { value: 35, enumerable: true }
});



console.log(employee2);

console.log(Object.getPrototypeOf(employee2));




function  Person(firstName, age) {
    this.firstName = firstName;
    this.age = age;
}

let person1 = new Person('Rinat', 39);
console.log(person1.constructor);  // Выведет: ƒ Person(firstName, age)

console.log(person1.constructor === Person);  // true




//Object.assign(target, ...sources);
let target = {};
let source1 = { a: 1 };
let source2 = { b: 2, c: 3 };

// Копируем свойства из source1 и source2 в target
Object.assign(target, source1, source2);

console.log(target);  // Выведет: { a: 1, b: 2, c: 3 }

let obj1 = { name: 'Amir' };
let obj2 = { age: 25 };
let obj3 = { city: 'Dushanbe' };

let result = Object.assign({}, obj1, obj2, obj3);

console.log(result);  // Выведет: { name: 'Amir', age: 25, city: 'Dushanbe' }

let original = { name: 'Amir', age: 25 };
let clone = Object.assign({}, original);

console.log(clone);  // Выведет: { name: 'Amir', age: 25 }


let person3 = {
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    },

    fight(){
        console.log(`bah bah bah`);
    }
};

let john = Object.create(person3);
john.name = 'John';
john.greet();  // Выведет: Hello, my name is John

john.fight();



 function calculattor(a, b) {
    
    var result = 0; 
    result =  a + b

     return result;
}

calculattor(5, 25);

console.log(result);


let transport = {
    speed: 250,
    model: "bmw",
    dataOut: 2022,
}


console.log(transport.model)
console.log(transport);

let opel = {
    color: "grey",
    motor: 4,
}

console.log(opel.motor);


Object.setPrototypeOf(opel, transport);

console.log(opel.model);


function Person(fistName, age){
    this.fistName = fistName,
    this.age = age
}


function Car(color, age){
    this.color = color,
    this.age = age
}

let RoyJon = new Person("RoyJon", 55);
console.log(RoyJon);
console.log(RoyJon.constructor === Person);
console.log(RoyJon.constructor === Car);

function card() {
    let number1 = 40
    let number2 = 60
    console.log(number1 + number2)
    return(number1 + number2)
}

card()
let result = card()
console.log(result)
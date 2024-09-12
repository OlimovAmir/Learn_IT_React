
function calc(a, b) {
    
    let result = a + b;
    console.log("result function: " + result);
    return result;
}


calc(45, 36);


let arr = [12, 23, 36, 45, 78];

arr.forEach(num => {

    let result = num*2;
    console.log(result);
});


let arrv2 = [11, 22, 33, 44, 55, 66];

let resultArrv2 = arrv2.map(function (elem) {
    let result = elem * 3;
    console.log(`Number: ${elem} resutl: ${result}`);
    return result
})


console.log("Ответ:", resultArrv2);



class Person {
    constructor(age, firstName) {
        this.age = age;
        this.firstName = firstName;
    }


    info(){
        console.log(`info: ${age} ${firstName}`)
    };
}


let person1 = new Person(18, "Oleg");

console.log(person1.info);

person1.info();
let obj = {
    age: 25,
    firstNane: 'Jhon'
}

let jsonString = `{
    "name": "Jhon",
    "age": 25,
    "obj": {},
    "arr": [],
    "isValide": true
}`

const person = JSON.parse(jsonString);
console.log(person.name);
console.log(person.age);
console.log(person);

document.getElementById('loadButton').addEventListener('click', function () {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);

    xhr.onload = function(){
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            document.getElementById('dataContainer').innerHTML = `
            <h2> ${data.title} </h2>
            <h2> ${data.body} </h2>
            `
        }else{
            console.log('Ошибка при загрузке данных')
        }
    };

    xhr.send();

})
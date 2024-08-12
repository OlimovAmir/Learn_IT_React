// Импортируем массив сотрудников из файла employees.js
import employees from './dataBase/persons.js';

function greetUser() {
    // Запрос имени у пользователя
    const name = prompt("Введите имя");

    // Проверка, введено ли слово "урод"
    if (name == "урод") {
        // Сообщение, если введено слово "урод"
        document.getElementById("greeting").textContent = "так нельзя";
    } else if (name) {
        // Формирование приветственного сообщения
        const abc = `Привет, ${name}! Добро пожаловать на наш сайт`;

        // Отображение приветствия на странице
        document.getElementById("greeting").textContent = abc;
    } else {
        // Сообщение, если имя не было введено
        document.getElementById("greeting").textContent = "Пожалуйста введите данные";
    }
}



function closeModal() {
    document.getElementById("modal").style.display = "none";
}

window.onclick = function (event) {
    if (event.target == document.getElementById("modal")) {
        closeModal();
    }
}


function submitFormV2() {
    let test = document.getElementById("userInput").value;
    console.log(test);
    let userInput = document.getElementById("userInput").value.trim();

    console.log(userInput)
    // Удаление лишних пробелов
    userInput = userInput.replace(/\s+/g, '');

    // Регулярное выражение для проверки номера телефона с 13 символами, включая +992
    const phoneRegex = /^\+992\d{9}$/;

    if (userInput === "") {
        alert("Please enter your phone number.");
    } else if (!phoneRegex.test(userInput)) {
        alert("Please enter a valid phone number starting with +992 and containing 13 characters.");
    } else {
        document.getElementById("modalMessage").textContent = "Ваше заявка принята";
        document.getElementById("modal").style.display = "block";
    }
}

function greetUserV2() {

    // Запрос имени у пользователя
    const name = prompt("Введите имя");

    // Создание регулярного выражения для проверки на слово "урод"
    const badWordsRegex = /урод|дурак|лох/i; // Флаг "i" делает проверку нечувствительной к регистру

    // Проверка, содержит ли введенное имя слово "урод"
    if (badWordsRegex.test(name)) {
        // Сообщение, если введено слово "урод"
        document.getElementById("greeting").textContent = "так нельзя";
    } else if (name) {
        // Формирование приветственного сообщения
        const abc = `Привет, ${name}! Добро пожаловать на наш сайт`;

        // Отображение приветствия на странице
        document.getElementById("greeting").textContent = abc;
    } else {
        // Сообщение, если имя не было введено
        document.getElementById("greeting").textContent = "Пожалуйста введите данные";
    }
}



function submitFormV3() {
    // Получаем ввод и разбиваем его на строки
    let userInput = document.getElementById("userInput").value.trim();
    
    // Разделение на строки по новой строке
    const lines = userInput.split('\n').map(line => line.trim()).filter(Boolean);

    console.log("Lines:", lines);
    
    // Регулярное выражение для проверки номера телефона с 13 символами, включая +992
    const phoneRegex = /\+992\d{9}/;

    // Проверка наличия номера телефона
    const hasPhone = lines.find(line => {
        const matches = line.match(phoneRegex);
        console.log("Matches:", matches);
        return matches !== null;
    });

    console.log("Has phone:", hasPhone);

    if (userInput === "") {
        alert("Please enter your request.");
    } else if (!hasPhone) {
        alert("Please enter at least one valid phone number starting with +992 and containing 13 characters.");
    } else {
        document.getElementById("modalMessage").textContent = "Your request has been received.";
        document.getElementById("modal").style.display = "block";
    }
}

function submitFormV4() {
    // Получаем ввод и разбиваем его на строки
    let userInput = document.getElementById("userInput").value.trim();
    
    // Разделение на строки по новой строке
    const lines = userInput.split('\n').map(line => line.trim()).filter(Boolean);

    console.log("Lines:", lines);

    // Регулярное выражение для проверки номера телефона с 13 символами, включая +992
    const phoneRegex = /\+992\d{9}/;
    // Регулярное выражение для проверки email
    const emailRegex = /.+@.+/;

    // Проверка наличия номера телефона
    const hasPhone = lines.find(line => {
        const matches = line.match(phoneRegex);
        console.log("Phone Matches:", matches);
        return matches !== null;
    });

    // Проверка наличия email
    const hasEmail = lines.find(line => {
        const matches = line.match(emailRegex);
        console.log("Email Matches:", matches);
        return matches !== null;
    });

    console.log("Has phone:", hasPhone);
    console.log("Has email:", hasEmail);

    if (userInput === "") {
        alert("Please enter your request.");
    } else if (!hasPhone) {
        alert("Please enter at least one valid phone number starting with +992 and containing 13 characters.");
    } else if (!hasEmail) {
        alert("Please enter at least one valid email address containing '@'.");
    } else {
        document.getElementById("modalMessage").textContent = "Your request has been received.";
        document.getElementById("modal").style.display = "block";
    }
}

// Используем массив сотрудников
console.log(employees);

// Например, выведем имена всех сотрудников
employees.forEach(employee => {
    console.log(employee.name);
});

// Фильтруем сотрудников, у которых зарплата больше 56000
const highSalaryEmployees = employees.filter(employee => employee.salary > 56000);

// Выводим этих сотрудников в консоль
console.log("Сотрудники с зарплатой больше 56000:");
highSalaryEmployees.forEach(employee => {
    console.log(`Name: ${employee.name}, Position: ${employee.position}, Salary: ${employee.salary}`);
});



// Создаем новый массив сотрудников с обновленными зарплатами
const updatedEmployees = employees.map(employee => {
    if (employee.salary < 56000) {
        // Если зарплата сотрудника меньше 56000, увеличиваем ее на 10000
        return {
            ...employee,
            salary: employee.salary + 10000
        };
    }
    // Возвращаем сотрудника без изменений, если его зарплата больше или равна 56000
    return employee;
});

// Выводим обновленный список сотрудников в консоль
console.log("Обновленный список сотрудников:");
updatedEmployees.forEach(employee => {
    console.log(`Name: ${employee.name}, Position: ${employee.position}, Salary: ${employee.salary}`);
});


// Создаем новый массив сотрудников с обновленными зарплатами
const updatedEmployees2 = employees.map(employee => {
    if (employee.salary < 56000) {
        // Если зарплата сотрудника меньше 56000, увеличиваем ее на 10000
        return {
            ...employee,
            salary: employee.salary + 10000
        };
    }
    // Возвращаем сотрудника без изменений, если его зарплата больше или равна 56000
    return employee;
});

// Фильтруем сотрудников, которым была увеличена зарплата
const employeesWithIncreasedSalary = updatedEmployees2.filter(employee => employee.salary > employees.find(e => e.id === employee.id).salary);

// Выводим список сотрудников, которым увеличили зарплату
console.log("Сотрудники, которым увеличили зарплату:");
employeesWithIncreasedSalary.forEach(employee => {
    console.log(`Name: ${employee.name}, Position: ${employee.position}, New Salary: ${employee.salary}`);
});

//  карточка сотрудников
const employeeList = document.getElementById('employee-list');

        employees.forEach(employee => {
            const employeeCard = document.createElement('div');
            employeeCard.className = 'employee-card';
            
            const employeePhoto = document.createElement('img');
            employeePhoto.src = employee.photo;
            employeePhoto.alt = `${employee.name}'s photo`;

            const employeeInfo = document.createElement('div');
            employeeInfo.innerHTML = `
                <h2>${employee.name}</h2>
                <p>Position: ${employee.position}</p>
                <p>Salary: $${employee.salary}</p>
            `;

            employeeCard.appendChild(employeePhoto);
            employeeCard.appendChild(employeeInfo);
            employeeList.appendChild(employeeCard);
        });
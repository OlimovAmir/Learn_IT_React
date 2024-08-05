
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
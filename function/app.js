

function greetUser() {
    // Запрос имени у пользователя
    const name = prompt("Введите имя");

    // Проверка, введено ли имя
    if (name) {
        // Формирование приветственного сообщения
        const abc = `Привет, ${name}! Добро пожаловать в наш сайт`;

        // Отображение приветствия на странице
        document.getElementById("greeting").textContent = abc;
    } else if(name == "урод"){
        // Сообщение, если имя не было введено
        document.getElementById("greeting").textContent = "так нельзя";
    }
    else{
        // Сообщение, если имя не было введено
        document.getElementById("greeting").textContent = "Пожадуйства введите данные";
    }
}


function submitForm() {
    const userInput = document.getElementById("userInput").value.trim();

    if (userInput === "") {
        alert("Please enter your request.");
    } else if (!userInput.includes("@")) {
        alert("Please enter a valid email address.");
    } else {
        document.getElementById("modalMessage").textContent = "Your request has been received.";
        document.getElementById("modal").style.display = "block";
    }
}

 function closeModal() {
    document.getElementById("modal").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("modal")) {
        closeModal();
    }
}
// Устанавливаем фиксированную дату
let endDate = new Date(new Date().getFullYear(), 8, 25);
console.log(endDate);

function reversTime() {
    let currentTime = new Date();
    let difference = endDate - currentTime; // Разница времени

    if (difference > 0) {
        let day = Math.floor(difference / (1000 * 60 * 60 * 24)); // day  

        let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let menuts = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let second = Math.floor((difference % (1000 * 60)) / (1000));
        console.log(`Остаток времени: 
            ${day} день ${hours} час ${menuts} минут ${second} секунд`)
    } else {
        console.log("Время истекло")
        clearInterval(countTimeInterval); // останавливает время 
    }

}


reversTime()

//let countTimeInterval = setInterval(reversTime, 1000);
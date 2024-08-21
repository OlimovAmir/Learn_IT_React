  function parseJSON(jsonString) {
    try {
      const data = JSON.parse(jsonString);
      console.log('Parsed data:', data);
    } catch (error) {
      console.error('Ошибка парсинга JSON:', error.message);
    }
  }
  
  parseJSON('{"name": "Alice"}'); // Успешно
  parseJSON('{name: Alice}');     // Ошибка парсинга JSON
  


  function performDivision(dividend, divisor) {
    try {
      // Проверка типов входных данных
      if (typeof dividend !== 'number' || typeof divisor !== 'number') {
        throw new TypeError('Оба параметра должны быть числами');
      }
      
      // Проверка делителя на ноль
      if (divisor === 0) {
        throw new RangeError('Деление на ноль невозможно');
      }
  
      // Выполнение деления
      const result = dividend / divisor;
      console.log('Результат деления:', result);
  
    } catch (error) {
      // Обработка ошибок
      if (error instanceof RangeError) {
        console.error('RangeError:', error.message);
      } else if (error instanceof TypeError) {
        console.error('TypeError:', error.message);
      } else {
        console.error('Error:', error.message);
      }
    }
  }
  
  // Примеры вызова функции
  performDivision(10, 2); // Результат деления: 5
 // performDivision(10, 0); // RangeError: Деление на ноль невозможно
 // performDivision(10, '2'); // TypeError: Оба параметра должны быть числами
 // performDivision('10', 2); // TypeError: Оба параметра должны быть числами
  

 console.log("-----------------------------------------------------------------")
  function performDivision2(dividend, divisor) {
    try {
      if (typeof dividend !== 'number' || typeof divisor !== 'number') {
        throw new TypeError('Оба параметра должны быть числами');
      }
      
      if (divisor === 0) {
        throw new RangeError('Деление на ноль невозможно');
      }
  
      const result = dividend / divisor;
      console.log('Результат деления:', result);
  
    } catch (error) {
      // Дополнительная обработка ошибок
      if (error instanceof RangeError) {
        console.error('RangeError:', error.message);
        // Например, отправка уведомления об ошибке
        notifyAdmin('Ошибка при делении: ' + error.message);
      } else if (error instanceof TypeError) {
        console.error('TypeError:', error.message);
      } else {
        console.error('Error:', error.message);
      }
    }
  }
  
  function notifyAdmin(message) {
    // Функция для отправки уведомлений
    console.log('Отправка уведомления админу:', message);
  }
  
  performDivision2(10, 0); // RangeError: Деление на ноль невозможно
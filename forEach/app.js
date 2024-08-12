import employees from './dataBase/employee.js';

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
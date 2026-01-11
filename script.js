import { employees } from "./employees.js";


document.addEventListener("DOMContentLoaded", () => {
    const mainElement = document.querySelector("main");

    // Group by department (object)
    const departments = {};
    employees.forEach(employee => {
        if(!departments[employee.department]) {
            //makes empty array
            departments[employee.department] = [];
        }
        // Adds each employee to their designated department
        departments[employee.department].push(employee.name)
    });

    //populate main with Department and Employee data
    Object.keys(departments).forEach(departmentName => {
        // Create sections with different departments
        const sectionElement = document.createElement("section");
        sectionElement.className = "department";

        // Create a header for each department name
        const h2Element = document.createElement("h2");
        h2Element.textContent = departmentName;
        sectionElement.appendChild(h2Element);

        // Create an un ordered list 
        const ulElement = document.createElement("ul");
        // Create a list of employees that are connected to each department
        departments[departmentName].forEach(employeeName => {
            const liElement = document.createElement("li");
            liElement.textContent = employeeName;
            ulElement.appendChild(liElement)
        });

        sectionElement.appendChild(ulElement);
        mainElement.appendChild(sectionElement);
    });

    // insert current year for copyright footer
    const currentYear = new Date().getFullYear();
    const copyright = document.getElementById("copyright");
    copyright.textContent = currentYear;
    
});



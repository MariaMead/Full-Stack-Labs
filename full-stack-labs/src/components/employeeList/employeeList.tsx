import { employees } from "./employeesAndDepartments";

type Departments = Record<string, string[]>;

function EmployeeList() {
    const departments: Departments = {};
    employees.map(employee => {
        if(!departments[employee.department]) {
            //makes empty array
            departments[employee.department] = [];
        }
        // Adds each employee to their designated department
        departments[employee.department].push(employee.name)
    });

    return(
        <>
            {/* Key: Departments with an array of employees to be displayed in a list*/}
            {Object.entries(departments).map(([departmentName, names]) => (
                <section className="department" key={departmentName}>
                    <h2>{departmentName}</h2>
                    <ul>
                        {names.map(name => (
                            <li key={name}>{name}</li>
                        ))}
                    </ul>
                </section>
            ))}
        </>
    );
}

export default EmployeeList;
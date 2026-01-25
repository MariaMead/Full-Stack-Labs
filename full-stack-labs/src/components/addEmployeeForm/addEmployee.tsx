import { useState } from "react";
import type { EmployeesDepartments } from "../employeeList/employeesAndDepartments";
import "./addEmployee.css"

export function AddEmployeeForm({
    departments,
    addEmployee,
}: {
    departments: string[];
    addEmployee: (employee: EmployeesDepartments) => void
}) {
    const [name, setName] = useState<string>("");
    const [department, setDepartment] = useState<string>("");
    const [error, setError] = useState<string>("");

    const formSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError("");

        if(name.trim().length < 3) {
            setError("Name must be longer then 3 characters.");
            return;
        }

        if(!departments.includes(department)) {
            setError("Please select a department");
            return;
        }

        addEmployee({name, department});
        setName("");
        setDepartment("");

    };

    return(
        <form onSubmit={formSubmit} className="addEmployee">
            <div className="inputField">
                <label>Employee Name:</label>
                    <input
                        type="text"
                        className="textbox"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
            </div>
            <div className="inputField">
                <label>Department:</label>
                    <select
                        value={department}
                        onChange={(event) => setDepartment(event.target.value)}
                    >
                        <option value="">Select Department</option>
                        {departments.map((dept) => (
                            <option key={dept} value={dept}>
                                {dept}
                            </option>
                        ))}
                    </select>
            </div>

            <div>
                {error && <p>{error}</p>}
            </div>
            <input type="submit" className="submitButton"
            disabled={!name || !department}
            />

        </form>
    )
}
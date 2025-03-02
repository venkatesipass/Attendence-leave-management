import { useState } from "react";

const EmployeeRegistration = () => {

    const [userData, setUserData] = useState(
        {
        first_name: '',
        middle_name: '',
        last_name: '',
        email: '',
        user_name: '',
        password: '',
        phone_number: '',
        address: '',
        date_of_joining: new Date(),
        department_id: "",
        role_id: "",
        manager_id: "",
        status: 0,
        designation: "",
        employee_id: '',
      }
    );
      
    return (
        <div>EmployeeRegistration</div>
    )
}

export default EmployeeRegistration


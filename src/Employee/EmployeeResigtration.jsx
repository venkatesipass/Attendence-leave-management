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

    const handleformdata=(e)=>{
        const {name,value}=e.target
        setUserData()
    }
    return (
        <div>
            <div>EmployeeRegistration</div>
            <form action="">
                <label>First Name</label>
                <input type="text" onChange={()=>{handleformdata}} />
                <label>Middle Name</label>
                <input type="text" />
                <label>Last Name</label>
                <input type="text" />
                <label>Email</label>
                <input type="email" />
                <label>User-Name</label>
                <input type="text" />
                <label>Password</label>
                <input type="password" />
                <label>Phone Number</label>
                <input type="text" />
                <label>Address</label>
                <input type="text" />
                <label>Date of Joining</label>
                <input type="date" />
                <label htmlFor="">Department Id</label>
                <input type="text" name="" id="" />
                <label htmlFor="">Role Id</label>
                <input type="text" name="" id="" />
                <label htmlFor="">Manager Id</label>
                <input type="text" name="" id="" />
                <label htmlFor="">Status</label>
                <input type="text" name="" id="" />
                <label htmlFor="">Designation</label>
                <input type="text" name="" id="" />
                <label htmlFor="">Employee Id</label>
                <input type="text" name="" id="" />
            </form>
        </div>

    )
}

export default EmployeeRegistration


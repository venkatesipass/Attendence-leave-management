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
    //    const name = e.target.name;
    //    const value = e.target.value;

       const {name,value} = e.target
       setUserData((prevData) => {
           return {
               ...prevData,
               [name]: value
           }
       })
       console.log("checking name",name);
       console.log(name,value);


       console.log(name,value);
    }
    return (
        <div>
            <div>EmployeeRegistration</div>
            <form action="">
                <label>First Name</label>
                <input type="text" value={userData.first_name} onChange={handleformdata} />
                <label>Middle Name</label>
                <input type="text" value={userData.middle_name}/>
                <label>Last Name</label>
                <input type="text" value={userData.last_name}/>
                <label>Email</label>
                <input type="email" value={userData.email}/>
                <label>User-Name</label>
                <input type="text" />
                <label>Password</label>
                <input type="password" value={userData.password} />
                <label>Phone Number</label>
                <input type="text" value={userData.phone_number}/>
                <label>Address</label>
                <input type="text" />
                <label>Date of Joining</label>
                <input type="date" value={userData.date_of_joining}/>
                <label htmlFor="">Department Id</label>
                <input type="text" value={userData.department_id} />
                <label htmlFor="">Role Id</label>
                <input type="text" value={userData.role_id} />
                <label htmlFor="">Manager Id</label>
                <input type="text" name="" id="" value={userData.manager_id}/>
                <label htmlFor="">Status</label>
                <input type="text" name="" id="" value={userData.status}/>
                <label htmlFor="">Designation</label>
                <input type="text" name="" id="" value={userData.designation}/>
                <label htmlFor="">Employee Id</label>
                <input type="text" name="" id="" value={userData.employee_id}/>
            </form>
        </div>

    )
}

export default EmployeeRegistration


import { useState } from 'react'
import Child from './child'
export default function Conmmiunication() {

    const [user, setUser] = useState("Nguyên");

    const [age, setAge] = useState(18);
    const handleChangeUser = () => {
        setUser("Cybersoft");
    };
    const handleGetUserReset =(data) =>{
        //nhận lại dât từ component con
        setUser(data);
    };
    return (
        <div >
            <h1>Commiunication</h1>
            <p>Username: {user} - Age: {age}</p>
            <button onClick={handleChangeUser} type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">ChangeUser</button>
            <Child user={user} age={age} handleGetUser={handleGetUserReset} />
        </div>
    );
}

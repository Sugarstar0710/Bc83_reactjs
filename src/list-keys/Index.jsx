import {use, useState} from 'react'
import data from "./data.json"  

export default function LitsKeys() {
    const [ListUser,setListUser] = useState(data);
    const renderListUser = () => {
        const newArr= ListUser.map((user) => {
            return(
                <li key={user.id}>
                     Id:{user.id} - Name : {user.name} - Age : {user.age}
                </li>
            );
        });
        return newArr;
    } 
  return (
    <div>
        <h1>ListKeys</h1>
        <ul>
            {renderListUser()}
        </ul>
        
    </div>
  )
}

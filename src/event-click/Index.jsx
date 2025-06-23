import React from 'react'

export default function EventClick() {

    const handleOnClick = ()=>{
        console.log(123);
    }
    const handleOnClickParam = (user,role)=>{
        console.log(user,role);
    }
  return (
    <div>
        <h1>EventClick</h1>
        <button onClick={handleOnClick}>On click</button>
        <button onClick={()=>handleOnClickParam("Nguyên","Admin")}>On click param</button>
    </div>
  )
}

import React from 'react'

export default function Child(props) {
    const handleResetUser = () => {
        const userReset ="Nguyên";
        props.handleGetUser(userReset);

    };
  return (
    <div className='border w-1/2 bg-amber-500'>
        <h1>Child</h1>
        <p>Username: {props.user} -Age:{props.age}</p>
        <button onClick={handleResetUser} type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Reset User</button>
    </div>
  );
}

    import { useState } from 'react'

    export default function State() {

        let username = "Nguyen";
        const [isLogin,setLogin] =useState(false)
        const handleLogin = () => {
            //cập nhật giá trị mới cho isLogin
            setLogin(true);
        };
        const handleLogout =() =>{
            setLogin(false);
        }
        const renderInfo = () => {
            if (isLogin) {
                return (<div>
                    <h1>Hello{username}</h1>
                       <button onClick={handleLogout}>Logout</button>
                </div>)
            }
            else {
                return (
                    <div>
                        <h1>Vui lòng Login</h1>
                        <button onClick={handleLogin}>Login</button>
                    </div>
                )
            }
        }
        return (
            <div>
                <h1>State</h1>
                {/* {isLogin ? ( <div>
                <h1>Hello{username}</h1>
            q   <button>Logout</button>
            </div>) : ( <div>
                <h1>Vui lòng Login</h1>
                <button>Login</button>
            </div>)} */}
                {renderInfo()}
            </div>
        )
    }

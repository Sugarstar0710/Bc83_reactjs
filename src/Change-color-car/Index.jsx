import { useState } from 'react'

export default function ChangeColorCar() {

    const [imgPath, setimgPath] = useState("./images/red-car.jpg");
    const handleChangeColorCar = (path) => {
        setimgPath(path);
    };
    
    return (
        <div>
            <h1>ChangeColorCar</h1>

            <div style={{ display: "flex" }}>
                <div>
                    <img src={imgPath} width="500px" alt="" />
                </div>
                <div>
                    <button onClick={()=>handleChangeColorCar("./images/red-car.jpg")}>Red</button>
                    <button  onClick={()=>handleChangeColorCar("./images/silver-car.jpg")} >Silver</button>
                    <button onClick={()=>handleChangeColorCar("./images/black-car.jpg")}>Black</button>
                </div>
            </div>
        </div>
    );
}

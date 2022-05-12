import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const incrementCounter = () => {
        setCounter(prevCounter => {
            if(prevCounter == 2){
                return prevCounter+3;
            }else {
                return prevCounter+ 1
            }
        });
    }
    return (
        <div>
            Counter Value = {counter}   
            <button onClick={incrementCounter}>Increment Counter</button>         
        </div>
    );
}

export default Counter;

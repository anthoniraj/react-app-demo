import { useState } from "react";
function Popup(){
    const [count, setCount]= useState(0);

    return (
        <div>
            <p>Count is {count}</p>
            <button onClick={()=> setCount(count+1)}>+</button>
            <button onClick={()=> setCount(count-1)}>-</button>
        </div>
    );
}
export default Popup;
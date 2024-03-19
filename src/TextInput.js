import { useState } from "react";

function TextInput(){
    const [message, setMessage] = useState('');
    const handleTextChnage = (e) =>{
        setMessage(e.target.value.toUpperCase());
    }

    return (
        <div>
            <input type="text" value={message} onChange={handleTextChnage}/>
            <p>Text: {message}</p>
        </div>
    );
}
export default TextInput;
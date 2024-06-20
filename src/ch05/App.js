import { useState } from "react";

function App() {
    //  변수가 inputValue
    const [ inputValue, setInputValue ] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleResetClick = () => {
        setInputValue("");
    }

    return <>
        <h3>값: {inputValue}</h3>
        <button onClick={handleResetClick}>초기화</button>
        <input type="text" onChange={handleInputChange} value={inputValue}/>
        
    </>
}

export default App;
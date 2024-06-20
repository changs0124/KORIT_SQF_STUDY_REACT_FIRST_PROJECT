import { useState } from "react";

function App() {
    const [ inputValue, setInputValue ] = useState("");
    const [ names, setNames ] = useState([]);

    const liList = [
        <li>{"test1"}</li>,
        <li>{"test2"}</li>,
        <li>{"test3"}</li>,
        <li>{"test4"}</li>
    ];

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        setInputValue(e.target.value);
        setInputValue(e.target.value);
        setInputValue(e.target.value);
        setInputValue(e.target.value);
    }

    const handleInputKeyDown = (e) => {
        if(e.keyCode === 13) {
            setNames(names => [ ...names, inputValue ]);
            setInputValue("");
        }
    }

    return <>
        <input onChange={handleInputChange} onKeyDown={handleInputKeyDown} value={inputValue} />
        <ul>
            {liList}
            {/* map을 돌리면 무조건 key값을 받아야 한다. */}
            { names.map((name, index) => <li key={index}>{name}</li>) }       
        </ul>
    </>
}

export default App;
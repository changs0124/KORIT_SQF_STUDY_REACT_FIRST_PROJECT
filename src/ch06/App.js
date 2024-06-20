import { useState } from "react";

function App() {
    const [ grade, setGrade ] = useState("");
    const [ group, setGroup ] = useState("");
    const [ number, setNumber ] = useState("");
    const [ name, setName ] = useState("");
    
    // if 활용
    // const handleChange = (e) => {
    //     if(e.target.name === "grade") {
    //         setGrade(e.target.value);
    //     }
    //     if(e.target.name === "group") {
    //         setGroup(e.target.value);
    //     }
    //     if(e.target.name === "number") {
    //         setNumber(e.target.value);
    //     }
    //     if(e.target.name === "name") {
    //         setName(e.target.value);
    //     }
    // }

    // switch 활용
    const handleChange = (e) => {
        switch(e.target.name) {
            case "grade":
                setGrade(e.target.value);
                break;
            case "group":
                setGroup(e.target.value);
                break;
            case "number":
                setNumber(e.target.value);
                break;
            case "name":
                setName(e.target.value);
                break;
            default:
        }
    }

    const handleReset = () => {
        setGrade(0);
        setGroup(0);
        setNumber(0);
        setName(0);
    }

    return<>
        <input name="grade" placeholder="학년" onChange={handleChange} value={grade} />
        <input name="group" placeholder="반" onChange={handleChange} value={group} />
        <input name="number" placeholder="번호" onChange={handleChange} value={number} />
        <input name="name" placeholder="이름" onChange={handleChange} value={name} />
        <button onClick={handleReset}>초기화</button>

        <ul>
            <li>학년: {grade}</li>
            <li>반: {group}</li>
            <li>번호: {number}</li>
            <li>이름: {name}</li>
        </ul>
    </>
}

export default App;
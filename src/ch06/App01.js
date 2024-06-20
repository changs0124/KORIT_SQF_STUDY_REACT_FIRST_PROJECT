import { useState } from "react";

// input이 여러개이면 객체화하여 사용
function App() {
    const emptyStudent = {
        grade: "",
        group: "",
        name: "",
        number: ""
    }

    const [ student, setStudent ] = useState({ ...emptyStudent });
    
    const handleChange = (e) => {
       setStudent( student => {
        return {
            ...student,
            [e.target.name]: e.target.value
        }
       });
    }

    const handleReset = () => {
        setStudent({ ...emptyStudent });
    }

    return<>
        <input name="grade" placeholder="학년" onChange={handleChange} value={student.grade} />
        <input name="group" placeholder="반" onChange={handleChange} value={student.group} />
        <input name="number" placeholder="번호" onChange={handleChange} value={student.number} />
        <input name="name" placeholder="이름" onChange={handleChange} value={student.name} />
        <button onClick={handleReset}>초기화</button>

        <ul>
            <li>학년: {student.grade}</li>
            <li>반: {student.group}</li>
            <li>번호: {student.number}</li>
            <li>이름: {student.name}</li>
        </ul>
    </>
}

export default App;
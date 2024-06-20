import { useState } from "react";

function App() {
    const emptyUser = {
        username: "",
        password: "",
        email: ""
    }

    const [ user, setUser ] = useState({ ...emptyUser });
    const [ inputData, setInputData ] = useState({ ...emptyUser})

    // let inputData = {
    //     username: "",
    //     password: "",
    //     email: ""
    // }

    // const handleInputChange = (e) => {
    //     inputData = {
    //         ...inputData,
    //         [e.target.name]: e.target.value
    //     }
    // }

    const handleInputChange = (e) => {
       setInputData(inputData => {
        return {
            ...inputData,
            [e.target.name]: e.target.value
        }
       });
    }

    const handleOkClick = () => {
        setUser(inputData);
    }
    // react에선 real Dom 과 virtual Dom이 서로서로 동기화가 일어나야 한다.(비교)
    // value를 사용하지 않으면 real Dom에서는 값이 계속 바뀌지만 virtual Dom에서는 랜더링이X > 입력한 값이 보이지 X
    return<>
        <input name="username" placeholder="사용자이름" onChange={handleInputChange} value={inputData.username} />
        <input name="password" placeholder="비밀번호" onChange={handleInputChange} value={inputData.password} />
        <input name="email" placeholder="이메일" onChange={handleInputChange} value={inputData.email} />
        <button onClick={handleOkClick}>확인</button>

        <ul>
            <li>사용자이름: {user.username}</li>
            <li>비밀번호: {user.password}</li>
            <li>이메일: {user.email}</li>
        </ul>
    </>
}

export default App;
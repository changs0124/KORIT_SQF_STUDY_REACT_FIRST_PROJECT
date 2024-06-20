import { useRef, useState } from "react";
import "./App.css";

function App() {
    const inputRef = {
        username: useRef(),
        password: useRef(),
        name: useRef()
    };

    const emptyUser = {
        username: "",
        password: "",
        name: ""
    };

    const [ inputValue, setInputValue ] = useState({ ...emptyUser });
    const [ userList, setUserList ] = useState([]);

    const handleInputChange = (e) => {
        setInputValue(inputValue => {
            return {
                ...inputValue,
                [e.target.name]: e.target.value
            }
        })
    };

    const handleInputKeyDown = (e) => {
        if(e.keyCode === 13) {
           if(e.target.name === "username") {
            inputRef.password.current.focus();
           }
           if(e.target.name === "password") {
            inputRef.name.current.focus();
           }
           if(e.target.name === "name") {
            inputRef.username.current.focus();
            setUserList(userList => [ ...userList, inputValue]);
            setInputValue({ ...emptyUser });
           }
        }
    }


    
    return<>
        {/*
            1. 입력후에 엔터를 입력하면 다음 input으로 포커스 이동
            2. name 필드에서 엔터를 입력하면 배열에 user객체 추가 그리고 input value들 초기화
        */}
        <input name="username" ref={inputRef.username} placeholder="사용자명" onKeyDown={handleInputKeyDown} onChange={handleInputChange} value={inputValue.username} />
        <input name="password" ref={inputRef.password} placeholder="비밀번호" onKeyDown={handleInputKeyDown} onChange={handleInputChange} value={inputValue.password} />
        <input name="name" ref={inputRef.name} placeholder="이름" onKeyDown={handleInputKeyDown} onChange={handleInputChange} value={inputValue.name} />

        {/* 
            3. tbody -> tr묶음을 userList에서 map을 통해 렌더링
        */}
        <table>
            <thead>
                <tr>
                    <th>index</th>
                    <th>username</th>
                    <th>password</th>
                    <th>name</th>
                </tr>
            </thead>
            <tbody>
                { userList.map((user, index) => 
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{user.username}</td>
                        <td>{user.password}</td>
                        <td>{user.name}</td>
                    </tr>
                )}
                
            </tbody>
        </table>
    </>
}

export default App;
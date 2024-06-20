import { useRef, useState } from "react";
import "./App.css";

function App() {
    const emptyUser = {
        username: "",
        password: "",
        name: ""
    };
    const [ inputData, setInputData ] = useState({ ...emptyUser });
    const [ userList, setUserList ] = useState([]);

    const inputRef = {
        username: useRef(),
        password: useRef(),
        name: useRef()
    };

    const handleInputKeyDown = (e) => {
        if(e.keyCode === 13) {
            const { username, password, name } = inputRef;
            switch(e.target.name) {
                case "username":
                    password.current.focus();
                    break;
                case "password":
                    name.current.focus();
                    break;
                case "name":
                    username.current.focus();
                    setUserList(userList => [ ...userList, inputData]);
                    setInputData({ ...emptyUser });
                    break;
                default:
            }
        }
    }

    const handleInputChange = (e) => {
        setInputData(inputData => {
            return {
                ...inputData,
                [e.target.name]: e.target.value
            }
        });
    }

    const handleDelete = (e) => {
        const newUserList = userList.filter((user, index) => index !== parseInt(e.target.value));
        setUserList(newUserList);
    }
   
    return<>
        <input name="username" ref={inputRef.username} placeholder="사용자명"
        onKeyDown={handleInputKeyDown}
        onChange={handleInputChange}
        value={inputData.username} />
        <input name="password" ref={inputRef.password} placeholder="비밀번호"
        onKeyDown={handleInputKeyDown}
        onChange={handleInputChange}
        value={inputData.password} />
        <input name="name" ref={inputRef.name} placeholder="이름"
        onKeyDown={handleInputKeyDown}
        onChange={handleInputChange}
        value={inputData.name} />
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
                {
                    userList.map(({ username, password, name}, index) => {
                        return (
                            // key값이 존재한다면 렌더링시에 조금 더 효율적으로 렌더링이 가능하다.(불필요한 렌더링 방지)
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{username}</td>
                                <td>{password}</td>
                                <td>{name}</td>
                                <td><button onClick={handleDelete} value={index}>삭제</button></td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    </>
}

export default App;
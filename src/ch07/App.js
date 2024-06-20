import { useState } from "react";

function App() {
    const emptyUser = {
        username: "",
        password: "",
        email: ""
    }

    const [ user, setUser ] = useState({ ...emptyUser });
    const [ result, setResult ] = useState({ ...user });

    const handleInput = (e) => {
        setUser( user => {
            return {
                ...user,
                [e.target.name]: e.target.value
            }
        });
    }

    const handleButton = () => {
        setResult(user);
        setUser({ ...emptyUser });
    }

    return<>
        <input name="username" onChange={handleInput} value={user.username}/>
        <input name="password" onChange={handleInput} value={user.password}/>
        <input name="email" onChange={handleInput} value={user.email}/>
        <button onClick={handleButton}>확인</button>

        <ul>
            <li>사용자이름: {result.username}</li>
            <li>비밀번호: {result.password}</li>
            <li>이메일: {result.email}</li>
        </ul>
    </>
}

export default App;
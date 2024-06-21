import { useRef, useState } from "react";
import "./App.css";
import Swal from "sweetalert2";

function App() {
    const test = {
        a: "aaa",
        b: "bbb"
    }
    console.log(test["a"]);

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

    const handleDeleteClick = (e) => {
        Swal.fire({
            title: "사용자 삭제",
            text: "해당 사용자를 삭제하시겠습니까?",
            icon: "info",
            showCancelButton: true,
            confirmButtonText: "삭제",
            confirmButtonColor: "red",
            cancelButtonText: "취소"
        }).then((result) => {
            if(result.isConfirmed) {
                Swal.fire({
                    title: "삭제 완료!",
                    text: "해당 사용자를 삭제하였습니다.",
                    icon: "success"
                });
                setUserList(userList => [ ...userList.filter(( user, index ) => index !== parseInt(e.target.value))]);
            };

        });
        // if(window.confirm("해당 사용자를 삭제하시겠습까?")) {
        //     // const newUserList = userList.filter((user, index) => index !== parseInt(e.target.value));
        //     // setUserList(newUserList);
        //     setUserList(userList => [ ...userList.filter(( user, index ) => index !== parseInt(e.target.value))]);
        // }
    }

    const handleEditClick = (key, index) => {
        Swal.fire({
            title: `${key} edit`,
            input: "text",
            // 배열에서 []안에 key값을 넣어 값을 호출 가능
            inputValue: userList[index][key],
            showCancelButton: true,
            cancelButtonText: "취소",
            confirmButtonText: "확인",
        }).then((result) => {
            if(result.isConfirmed) {
                setUserList(userList => [ ...userList.map((user, i) => {
                    if(i === index) {
                        return {
                            ...user,
                            [key]: result.value
                        }
                    }
                    return user;
                })]);
            }
        });
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
                    <th>edit</th>
                    <th>delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    userList.map(({ username, password, name}, index) => {
                        return (
                            // key값이 존재한다면 렌더링시에 조금 더 효율적으로 렌더링이 가능하다.(불필요한 렌더링 방지)
                            <tr key={index}>
                                <td>{index + 1}</td>
                                {/*  함수에 변수값을 넣어 호출 할 경우 '() =>' 넣어 렌더링시 바로 호출되는 것을 막음  */}
                                <td onClick={() => handleEditClick("username", index)}>
                                    {username}
                                </td>
                                <td onClick={() => handleEditClick("password", index)}>
                                    {password}
                                </td>
                                <td onClick={() => handleEditClick("name", index)}>
                                    {name}
                                </td>
                                <td>
                                    <button>edit</button>
                                </td>
                                <td>
                                    <button onClick={handleDeleteClick} value={index}>delete</button>
                                </td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    </>
}

export default App;
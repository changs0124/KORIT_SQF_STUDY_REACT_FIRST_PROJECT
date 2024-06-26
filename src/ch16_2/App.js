
import { useEffect, useState } from "react";
import "./App.css"

function App() {
    const emptyData = {
        userName: "",
        userEmail: "",
        imgSrc: ""
    }

    useEffect(() => {
        const lsUsers = localStorage.getItem("users")
        if(lsUsers) {
            setUsers(JSON.parse(lsUsers));
            setData(JSON.parse(lsUsers)[0]);
        }
    }, []);

    const [ data, setData ] = useState({ ...emptyData });
    const [ users, setUsers ] = useState([]);

    const handleInputChange = (e) => {
        setData(data => ({
            ...data,
            [e.target.name]: e.target.value
        }));
    }
    
    const handleLoadImgClick = () => {
        const fileElement = document.createElement("input");
        fileElement.setAttribute("type", "file");
        fileElement.click();
        fileElement.onchange = (e) => {
            const file = e.target.files[0];
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                setData(data => ({
                    ...data,
                    imgSrc: fileReader.result
                }));
            }
        }
    }

    const handleSubmitButton = () => {
        setUsers(users =>[ ...users, {
            ...data
        }]);
        setData({ ...emptyData })
    }

    const handleRestartButton = () => {
        if(users.length === 0) {
            return;
        }
        setData(users[0]);
    }

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users))
    }, [users])

    return ( 
        <>
        <div className="main">
            <div className="header"><h1>프로필</h1></div>
            <div className="imgbox" onClick={handleLoadImgClick}>
                <img src={data.imgSrc} />
            </div>
            <div className="inputbox">
            <input
                type="text"
                name="userName"
                placeholder="이름" 
                value={data.userName}
                onChange={handleInputChange}
                autoFocus
            />
            <input 
                type="text"
                name="userEmail"
                placeholder="이메일"
                value={data.userEmail}
                onChange={handleInputChange}
            />
            <button onClick={handleSubmitButton}>저장</button>
            <button onClick={handleRestartButton}>새로고침</button>
            </div>
        </div>
        </>
        );
    }

export default App;
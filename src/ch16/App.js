
import { useEffect, useRef, useState } from "react";
import "./App.css"

function App() {
    const emptyUser = {
            userName: "",
            userEmail: "",
            imgResult: ""
        }
    
        const [ inputData, setInputData ] = useState({ ...emptyUser });
        const [ users, setUsers ] = useState({ ...emptyUser });
        const [ imgSrc, setImgSrc ] = useState("");

        useEffect(() => {
            const lsUsers = localStorage.getItem("users");
            setUsers(!lsUsers ? { ...emptyUser } : JSON.parse(lsUsers));
        }, [])
    
        const handleInputChange = (e) => {
            setInputData(inputData => ({
                ...inputData,
                [e.target.name]: e.target.value
            }))
        }
    
        const handleSubmitButton = () => {
            setUsers(users => {
                return {  ...inputData, imgResult: imgSrc}
            });
            
        }

        useEffect(() => {
            localStorage.setItem("users", JSON.stringify(users));
        }, [users])


        useEffect(() => {
            const lsUsers = localStorage.getItem("users");
            setUsers(!lsUsers ? { ...emptyUser } : JSON.parse(lsUsers));
        }, [])

        const handleLoadImgClick = () => {
            const fileElement = document.createElement("input");
            fileElement.setAttribute("type", "file");
            fileElement.click();
            fileElement.onchange = (e) => {
                const file = e.target.files[0];
                const fileReader = new FileReader();
                fileReader.readAsDataURL(file);
                fileReader.onload = (e) => {
                    setImgSrc(e.target.result);
                }
            }
        }

        return ( 
            <>
            <div className="main">
                <div className="header"><h1>프로필</h1></div>
                <div className="imgbox" onClick={handleLoadImgClick}>
                    <img src={imgSrc} />
                </div>
                <div className="inputbox">
                <input
                type="text"
                name="userName"
                placeholder="이름" 
                value={inputData.userName}
                onChange={handleInputChange}
                />
                <input 
                type="text"
                name="userEmail"
                placeholder="이메일"
                value={inputData.userEmail}
                onChange={handleInputChange}
                />
                <button onClick={handleSubmitButton} >저장</button>
                </div>
            </div>
            </>
         );
    }

export default App;
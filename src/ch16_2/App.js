
import { useEffect, useState } from "react";

function App() {
    // 초기 상태 설정
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [imgSrc, setImgSrc] = useState('');
    
    // 컴포넌트가 마운트될 때 로컬스토리지에서 데이터 가져오기
    useEffect(() => {
        const storedData = localStorage.getItem('userData');
        if (storedData) {
            const { userName, userEmail, imgSrc } = JSON.parse(storedData);
            setUserName(userName);
            setUserEmail(userEmail);
            setImgSrc(imgSrc);
        }
    }, []);
    
    // 이름 입력 핸들러
    const handleNameChange = (e) => {
        setUserName(e.target.value);
    };
    
    // 이메일 입력 핸들러
    const handleEmailChange = (e) => {
        setUserEmail(e.target.value);
    };
    
    // 이미지 선택 핸들러
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImgSrc(reader.result);
        };
    };
    
    // 확인 버튼 클릭 핸들러
    const handleSave = () => {
        const userData = {
            userName,
            userEmail,
            imgSrc
        };
        localStorage.setItem('userData', JSON.stringify(userData));
    };
    
    return (
        <div>
            <h2>프로필 편집기</h2>
            <div>
                <label>이름:</label>
                <input 
                    type="text"
                    value={userName}
                    onChange={handleNameChange}
                />
            </div>
            <div>
                <label>이메일:</label>
                <input 
                    type="email"
                    value={userEmail}
                    onChange={handleEmailChange}
                />
            </div>
            <div>
                <label>프로필 사진:</label>
                <input 
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                />
                {imgSrc && (
                    <img src={imgSrc} alt="프로필 사진" style={{ maxWidth: '200px', marginTop: '10px' }} />
                )}
            </div>
            <button onClick={handleSave}>저장</button>
        </div>
    );
}
export default App;
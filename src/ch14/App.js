import { useState } from "react";

function App() {
    const [ imgSrc, setImgSrc ] = useState("");

    const handleLoadImgClick = () => {
        // 클릭시 인풋 태그 생성 후 타입 설정 클릭
        const fileElement = document.createElement("input");
        fileElement.setAttribute("type", "file");
        // fileElement.setAttribute("multiple", true);
        fileElement.click();
        
        fileElement.onchange = (e) => {
            const file = e.target.files[0];
            
            const fileReader = new FileReader();

            // readAsDataURL 이벤트 발생
            fileReader.readAsDataURL(file);

            fileReader.onload = (e) => {
                setImgSrc(e.target.result);
            }

        }
    }

    return ( 
        <>
        <button onClick={handleLoadImgClick}>이미지 불러오기</button>
        <input type="file" multiple="false"/>
        <div>
            <img src={imgSrc} />
        </div>
        </>
     );
}

export default App;
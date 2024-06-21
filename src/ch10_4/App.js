import { useState } from "react";


function App() {
    
    const [ isShow, setIsShow ] = useState();

    const handleShowBox = (e) => {
        
    }


    return<>
        <div>
            <button onClick={handleShowBox}>추가</button>
            <button>수정</button>
            <button>삭제</button>
        </div>
    </>
}

export default App;
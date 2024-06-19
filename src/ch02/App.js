import { useState } from "react";

function App() {
    const [ number, setNumber ] = useState(100);
    const [ name, setName ] = useState("null");
    console.log(number);
    console.log(name);
    if(number === 100) {
        setTimeout(() => setNumber(200), 2000);
        // setNumber(200); // 상태 변화 > 상태 변화 때 function 다시 호출 = 재렌더링 
        // 재랜더링 시점에는 상태 초기화는 일어나지 않는다.
    }

    if(number === 200) {
        setNumber(300); // useState의 setter는 비동기
        console.log(number);
    }

    if(name === null) {
        setName("sch");
        console.log(name);
    }
    
    return <>
        <h1>Number 상태 확인</h1>
        <h2>{number}</h2>
    </>
}

export default App;
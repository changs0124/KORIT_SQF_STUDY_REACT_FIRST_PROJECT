import { useEffect, useState } from "react";

function App() {
    const [ number, setNumber ] = useState(0);
    const [ number2, setNumber2 ] = useState(0);
    const [ number3, setNumber3 ] = useState(0);

   
    // Hook 함수
    // useEffect : 2개의 매개변수 : 함수, [](디펜던시)
    // 호출시 무조건 한번 실행
    useEffect(() => {
        // 마운트 지점
        console.log(number2);
        setNumber3(number * 10);
        return () => {
            // 언마운트 지점
        }
    }, [number, number2]);
    
    const handleButtonClick = (e) => {
        setNumber(a => a + 1);
    }
    const handleButtonClick2 = (e) => {
        setNumber2(b => b + 10);
    }
    return (
        <>
            <h1>{number}</h1>
            <h1>{number2}</h1>
            <h1>{number3}</h1>
            <button onClick={handleButtonClick}>num1 증가</button>
            <button onClick={handleButtonClick2}>num2 증가</button>
        </>

    );
}

export default App;
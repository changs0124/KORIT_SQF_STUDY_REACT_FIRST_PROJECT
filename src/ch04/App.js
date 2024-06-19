import { useState } from "react";
import Button from "./Button";

function App() {
    const [ num, setNumber ] = useState(0);
    
    return <>
        <h1>번호: {num}</h1>
        <Button text={"증가"} setNumber={setNumber} />
        <Button text={"감소"} setNumber={setNumber} />
    </>
}

export default App;
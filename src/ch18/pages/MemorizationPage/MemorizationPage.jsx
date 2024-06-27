/** @jsxImportSource @emotion/react */
import { useCallback, useMemo, useState } from "react";
import * as s from "./style";

function MemorizationPage(props) {
    const [ value, setValue ] = useState(0);
    const [ value2, setValue2 ] = useState(0);
    const [ num, setNum ] = useState(0);

    // 안쪽에 연산
    const a = useMemo(() => {
        console.log(num);
        console.log(value);
        console.log(value2)
        return num + 10
    }, [num]);
    // console.log(a);

    const handleChange = (e) => { 
        setValue(e.target.value);
    };

    const handleChange2 = (e) => {
        setValue2(e.target.value);
    };

    const handleClick = useCallback(() => {
        setNum(parseInt(value));
    }, []);

    return (
        <div>
            <h1>{a}</h1>
            <input type="text" onChange={handleChange}  />
            <input type="text" onChange={handleChange2}  />
            <button onClick={handleClick}>확인</button>        
        </div>
    );
}

export default MemorizationPage;
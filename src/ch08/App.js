import { useRef } from "react";

function App() {
    // 해당 함수 최상단에 위치
    // ref - querySelector 대신 사용
    // 1. 렌더링이 되어도 값이 유지(Static)
    // 객체 형태
    const inputRef = {
        a: useRef(),
        b: useRef(),
        c: useRef()
    }

    // const aref = useRef();
    // const bref = useRef();
    // const cref = useRef();

    const handleOnKeyDown = (e) => {
        // console.log(aref);
        // console.log(bref);
        // console.log(cref);

        // react에서 querySelector 사용 지양 - real Dom에 직접 접근
        // const inputs = document.querySelectorAll("input");

        if(e.keyCode === 13) {
            switch(e.target.name) {
                case "a":
                    // current는 꼭 붙이기
                    inputRef.a.current.focus();
                    break;
                case "b":
                    inputRef.b.current.focus();
                    break;
                case "c":
                    inputRef.c.current.focus();
                    break;
                    default:
            }
        }
    }
            
    return <>
        <input name="a" ref={inputRef.a} onKeyDown={handleOnKeyDown} />
        <input name="b" ref={inputRef.b} onKeyDown={handleOnKeyDown} />
        <input name="c" ref={inputRef.c} onKeyDown={handleOnKeyDown} />
    </>
}

export default App;
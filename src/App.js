/*
  컴포넌트 : 함수 > HTML 태그를 리턴하는 함수
          : 대문자.js로 생성
          : 함수에 태그를 담아서 사용 > js export 후 사용하고 싶은 곳에서 import
*/
/*
  JSX
  1. 태그를 열었으면 닫아야한다. <a></a>, <a />
  2. 여러 태그를 리턴해야하는 경우에는 하나로 묶어야 한다.
  3. JSX 안에 값 또는 변수를 사용하려면 {}표현식을 사용해야한다. <-> `${}` : JS
  4. {}안에 주석 

*/

// ./ : 현재 위치
import { Fragment } from "react";
import Hello from "./components/Hello";
import "./App.css";
import CustomInput from "./components/CustomInput";
import Box from "./components/Box";

// App은 컴포넌트
function App() {
  const name = "sch";
  const fontColorRed = {
    color: "red"
  };
  // props로 JSX도 변수처리 가능
  // const age = <h2>{31}</h2>
  // return <Fragment>
  //           <div>
  //             <Hello></Hello>
  //           </div>
  //           <div>
  //             <Hello />
  //           </div>
  //       </Fragment>
  // =
  // Fragment 생략 가능
  return <>
    <div>
      <Hello></Hello>
    </div>
    <div>
      <Hello />
    </div>
    <h1 style={fontColorRed} className={"fs-20 itelic"}>{name}</h1>
    <CustomInput ph={"이름"} disabled={true} value={"sch"} />
    <CustomInput ph={"나이"} disabled={false} />
    <CustomInput ph={"연락처"} disabled={true}  />
    {/* 있으면 true 없으면 false */}
    <Box name={"sch"} isShow={true}>
      <h2>{31}</h2>
      <h2>{31}</h2>
      <h2>{31}</h2>
    </Box>
  </>

}

export default App;
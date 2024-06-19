/*
  컴포넌트 : 함수 > HTML 태그를 리턴하는 함수
          : 대문자.js로 생성
          : 함수에 태그를 담아서 사용 > js export 후 사용하고 싶은 곳에서 import
*/

import { Fragment } from "react";
import Hello from "./components/Hello";

// App은 컴포넌트
function App() {
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
        </>

}

export default App;
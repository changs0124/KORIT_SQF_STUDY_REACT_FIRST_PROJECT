/** @jsxImportSource @emotion/react */
import { useParams } from "react-router-dom";
import * as s from "./style";

function ParamsStudyPage(props) {

    // 객체 : 문자열이기 때문에 숫자를 가지고 오는 경우 Parse.Int()사용
    const params = useParams();
    console.log(params.name);
    console.log(params.age);
    // const name = params.name;

    return (
        <div>
            
        </div>
    );
}

export default ParamsStudyPage;
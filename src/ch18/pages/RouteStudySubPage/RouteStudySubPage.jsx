/** @jsxImportSource @emotion/react */
import { Link, Route, Routes } from "react-router-dom";
import * as s from "./style";
import MainContainer from "../../components/MainContainer/MainContainer";


function RouteStudySubPage(props) {
    return (
        <MainContainer>
            <div>
                <h1>프로필</h1>
                <ul>
                    <Link to={"name"}><li>이름</li></Link>
                    <Link to={"age"}><li>나이</li></Link>
                    <Link to={"address"}><li>주소</li></Link>
                </ul>
            </div>
            <div>
                <Routes>
                    <Route path="name" element={<div>testName</div>} />
                    <Route path="age" element={<div>testAge</div>} />
                    <Route path="address" element={<div>testAddress</div>} />
                </Routes>
            </div>
        </MainContainer>
    );
}

export default RouteStudySubPage;
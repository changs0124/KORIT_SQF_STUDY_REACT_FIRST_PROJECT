/** @jsxImportSource @emotion/react */
import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import * as s from "./style";
import MainContainer from "../../components/MainContainer/MainContainer";


function RouteStudySubPage(props) {
    const navigate = useNavigate();
    const location = useLocation();
    

    // location.pathname = URL값 가지고 오기
    console.log(location.pathname);
    console.log(location.pathname.lastIndexOf("/"));
    const index = location.pathname.lastIndexOf("/");
    console.log(location.pathname.substring(index + 1));

    const handleAgeClick = () => {
        navigate("/routestudy/page1/age", {replace: false});
        // window.location.href => replace: false
        // window.location.replace => replace: true - 뒤로가기 시 최초로 replace를 사용한 곳으로 이동(히스토리 삭제) ex) 회원가입 중간에 뒤로가기로 하면 회원가입 초기 페이지로 이동하는 
    }
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
            <button onClick={handleAgeClick}>나이</button>
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
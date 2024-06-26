/** @jsxImportSource @emotion/react */
import { Link, Route, Routes } from "react-router-dom";
import * as s from "./style";
import RouteStudySubPage from "../RouteStudySubPage/RouteStudySubPage";
import MainContainer from "../../components/MainContainer/MainContainer";

function RouteStudyPage(props) {
    return (
        <MainContainer>
            <div>
                <h1>리부트 수업</h1>
                <ul>
                    <Link to={"page1"}><li>1번 페이지</li></Link>
                    <Link to={"page2"}><li>2번 페이지</li></Link>
                    <Link to={"page3"}><li>3번 페이지</li></Link>
                </ul>
            </div>
            <div>
                <Routes>
                    <Route path="page1/*" element={<RouteStudySubPage />} />
                    <Route path="page2" element={<div>페이지2</div>} />
                    <Route path="page3" element={<div>페이지3</div>} />
                </Routes>
            </div>
        </MainContainer>
    );
}

export default RouteStudyPage;
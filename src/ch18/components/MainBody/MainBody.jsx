/** @jsxImportSource @emotion/react */
import { Route, Routes } from "react-router-dom";
import * as s from "./style";
import RouteStudyPage from "../../pages/RouteStudyPage/RouteStudyPage";


function MainBody(props) {
    return (
        <div css={s.layout}>
            <Routes>
                {/* path : 주소 // element : 컴포넌트와 태그*/}
                {/* /* : 해당 *에 주소를 받겠다 */}
                <Route path="/routestudy/*" element={<RouteStudyPage />}/>
            </Routes>
        </div>
    );
}

export default MainBody;
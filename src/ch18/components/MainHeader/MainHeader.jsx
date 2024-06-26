/** @jsxImportSource @emotion/react */
import MainContainer from "../MainContainer/MainContainer";
import * as s from "./style";
import { FaBars } from "react-icons/fa";

function MainHeader(props) {
    return (
        <div css={s.layout}>
             <MainContainer>
                <div css={s.headerBody}>
                    <button css={s.menuToggleButton}><FaBars /></button>
                </div>
            </MainContainer>
        </div>
    );
}

export default MainHeader;
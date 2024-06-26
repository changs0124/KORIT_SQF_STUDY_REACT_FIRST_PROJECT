/** @jsxImportSource @emotion/react */
import MainContainer from "../../MainContainer/MainContainer";
import * as s from "./style";
import { FaBars, FaHome } from "react-icons/fa";

function MainSidebarHeader({ setMainSidebarShow }) {
    const hadnleToggleButtonClick = () => {
        setMainSidebarShow(false);
    }
    
    return (
        <div css={s.layout}>
            <MainContainer>
                <div css={s.header}>
                    <h1 css={s.title}>
                        <FaHome />
                        <span>수업자료</span>
                    </h1>
                    <button
                        css={s.menuToggleButton} 
                        onClick={hadnleToggleButtonClick}>

                            <FaBars />
                    </button>
                </div>
            </MainContainer>
        </div>
    );
}

export default MainSidebarHeader;
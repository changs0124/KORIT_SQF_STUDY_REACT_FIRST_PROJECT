/** @jsxImportSource @emotion/react */
import { useRecoilState } from "recoil";
import MainContainer from "../../MainContainer/MainContainer";
import * as s from "./style";
import { FaBars, FaHome } from "react-icons/fa";
import { mainSidebarShowAtom } from "../../../atoms/mainSidebarShow";

function MainSidebarHeader() {
    const hadnleToggleButtonClick = () => {
        setMainSidebarShow(false);
    }

    const [ mainSidebarShow ,setMainSidebarShow ] = useRecoilState(mainSidebarShowAtom);
    
    return (
        <div css={s.layout}>
            <MainContainer>
                <div css={s.header}>
                    <h1 css={s.title}>
                        <FaHome href="././App"/>
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
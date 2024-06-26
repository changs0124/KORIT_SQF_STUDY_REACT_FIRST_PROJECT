/** @jsxImportSource @emotion/react */
import MainSidebarBody from "./MainSidebarBody/MainSidebarBody";
import MainSidebarHeader from "./MainSidebarHeader/MainSidebarHeader";
import * as s from "./style";

function MainSidebar({ isMainSidebarShow, setMainSidebarShow}) {
    return (
        <div css={s.layout(isMainSidebarShow)}>
            <MainSidebarHeader
            setMainSidebarShow={setMainSidebarShow}
            />
            <MainSidebarBody />
        </div>
    );
}

export default MainSidebar;
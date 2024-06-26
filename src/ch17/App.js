/** @jsxImportSource @emotion/react */

import * as s from "./style";

function App() {

    return (
        <div css={s.Container}>
            <div css={s.header}>
                <h1>프로필</h1>
            </div>
            <div css={s.body}>
                <div>
                    <img src="" />
                </div>
            </div>
            <div css={s.footer}>
                <input type="text" />
                <input type="text" />
                <button>확인</button>
            </div>
        </div>
    );
}

export default App;
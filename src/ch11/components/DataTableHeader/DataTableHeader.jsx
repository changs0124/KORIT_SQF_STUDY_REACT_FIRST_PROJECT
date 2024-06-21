import "./style.css";

function DataTableHeader({ mode, setMode }) {

    const handleChangeModeClick = (e) => {
        setMode(parseInt(e.target.value));
    }

    const handleSubmitClick = () => {
        if(mode === 1) {
            
            alert("상품추가")
        }
        if(mode === 2) {
            alert("상품수정")
        }
        if(mode === 3) {
            alert("상품삭제")
        }
        resetMode();
    }

    const handleCancelClick = () => {
        resetMode();
    }

    const resetMode = () => {
        setMode(0);
    }


    return (
        <header className="table-header">
            <div className="input-group">
                {/* autoFocus : 페이지 로드시 해당 인풋에 고정 */}
                {/* disabled 명시하면 값을 넣는 경우 true로 처리 */}
                <input type="text" disabled={mode === 0 || mode === 3} placeholder="상품명" autoFocus />
                <input type="text" disabled={mode === 0 || mode === 3} placeholder="사이즈"/>
                <input type="text" disabled={mode === 0 || mode === 3} placeholder="색상"/>
                <input type="text" disabled={mode === 0 || mode === 3} placeholder="가격"/>
            </div>
            <div>
                {
                    !mode && (
                        <div className="button-group">
                            <button onClick={handleChangeModeClick} value={1} >추가</button>
                            <button onClick={handleChangeModeClick} value={2} >수정</button>
                            <button onClick={handleChangeModeClick} value={3} >삭제</button>
                        </div>
                    )
                }
                {
                    !!mode && (
                        <div className="button-group">
                            <button onClick={handleSubmitClick}>확인</button>
                            <button onClick={handleCancelClick}>취소</button>
                        </div>
                    )
                }
                
            </div>
        </header>
    );
}

export default DataTableHeader;
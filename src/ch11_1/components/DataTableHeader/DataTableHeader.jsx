import { useRef, useState } from "react";
import "./style.css";

function DataTableHeader({ mode, setMode, products, setProducts }) {
    const emptyProduct = {
        id: 0,
        productName: "",
        size: "",
        color: "",
        price: ""
    }

    const inputRefs = {
        productName: useRef(),
        size: useRef(),
        color: useRef(),
        price: useRef()
    }

    const [ inputValue, setInputValue ] = useState({ ...emptyProduct });

    const handleInputChange = (e) => {
        setInputValue(inputValue => {
            return {
                ...inputValue,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleInputKeyDown = (e) => {
        if(e.keyCode === 13) {
            if(e.target.name === "productName" && e.target.value !== "") {
                inputRefs.size.current.focus();
            }
            if(e.target.name === "size" && e.target.value !== "") {
                inputRefs.color.current.focus();
            }
            if(e.target.name === "color" && e.target.value !== "") {
                inputRefs.price.current.focus();
            }
            if(e.target.name === "price" && e.target.value !== "") {
                
            }
            
        }  
    }

    const getNewId = () => {
        const productIds = products.map(product => product.id);
        const maxProductId = productIds.length === 0 ? 0 : Math.max.apply(null, productIds);
        return maxProductId + 1;
    }
    const handleChangeModeClick = (e) => {
        setMode(parseInt(e.target.value));
    }

    const handleSubmitClick = () => {
        if(mode === 1) {
            setProducts(product => [ ...products, { ...inputValue, id: getNewId()}]);
            setInputValue({ ...emptyProduct });
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
        setInputValue({ ...emptyProduct });
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
                <input name="productName" ref={inputRefs.productName}
                type="text" disabled={mode === 0 || mode === 3} placeholder="상품명"
                value={inputValue.productName} autoFocus 
                onChange={handleInputChange} onKeyDown={handleInputKeyDown}/>
                <input name="size" ref={inputRefs.size} value={inputValue.size}
                type="text" disabled={mode === 0 || mode === 3} placeholder="사이즈"
                onChange={handleInputChange} onKeyDown={handleInputKeyDown}/>
                <input name="color" ref={inputRefs.color} value={inputValue.color}
                type="text" disabled={mode === 0 || mode === 3} placeholder="색상"
                onChange={handleInputChange} onKeyDown={handleInputKeyDown}/>
                <input name="price" ref={inputRefs.price} value={inputValue.price}
                type="text" disabled={mode === 0 || mode === 3} placeholder="가격"
                onChange={handleInputChange} onKeyDown={handleInputKeyDown}/>
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
import { useRef, useState } from "react";
import "./style.css";
import Swal from "sweetalert2";

function DataTableHeader({ mode, setMode, setProducts, setIsDeleteRequest }) {
    const emptyProduct = {
        id: "",
        productName: "",
        size: "",
        color: "",
        price: ""
    }

    const inputRefs = {
        productName: useRef(),
        size: useRef(),
        color: useRef(),
        price: useRef(),
    }
    const [ inputData, setInputData] = useState({ ...emptyProduct });

    const handleInputChange = (e) => {
        setInputData(inputData => ({
            ...inputData,
            [e.target.name]: e.target.value
        }))
    }

    const handleChangeModeClick = (e) => {
        setMode(parseInt(e.target.value));
    }

    const handleInputKeyDown = (e) => {
        if(e.keyCode === 13) {
            if(e.target.name === "productName") {
                inputRefs.size.current.focus();
            }
            if(e.target.name === "size") {
                inputRefs.color.current.focus();
            }
            if(e.target.name === "color") {
                inputRefs.price.current.focus();
            }
            if(e.target.name === "price") {
                handleSubmitClick();
                // inputRefs.productName.current.focus();
            }
        }
        
    }

    const handleSubmitClick = () => {
        if(mode === 1) {
            setProducts(products => {
                const productsIds = products.map(product => product.id);
                const maxId = productsIds.length === 0 ? 0 : Math.max.apply(null, productsIds);
                return [ ...products, { ...inputData, id: maxId + 1}]
            });
            Swal.fire({
                title: "상품 정보 추가 완료",
                icon: "success",
                position: "top-end",
                showConfirmButton: false,
                timer: 500
            });    
            resetMode();
        }
        if(mode === 2) {
            alert("상품수정")
        }
        if(mode === 3) {    
            Swal.fire({
                title: "상품 정보 삭제",
                text: "정말로 삭제 하지겠습니까>",
                showCancelButton: true,
                confirmButtonText: "삭제",
                confirmButtonColor: "red",
                cancelButtonText: "취소"
            }).then(result => {
                if(result.isConfirmed) {
                    setIsDeleteRequest(true);
                }
            });
        }
        
    }

    const handleCancelClick = () => {
        resetMode();
    }

    const resetMode = () => {
        setInputData({ ...emptyProduct });
        setMode(0);
    }

    return (
        <header className="table-header">
            <div className="input-group">
                {/* autoFocus : 페이지 로드시 해당 인풋에 고정 */}
                {/* disabled 명시하면 값을 넣는 경우 true로 처리 */}
                <input 
                    name="productName"
                    type="text" 
                    disabled={mode === 0 || mode === 3} 
                    placeholder="상품명"
                    value={inputData.productName}
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    ref={inputRefs.productName}
                    autoFocus 
                />
                <input 
                    name="size"  
                    value={inputData.size}
                    type="text" 
                    disabled={mode === 0 || mode === 3}
                    placeholder="사이즈"
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    ref={inputRefs.size}
                />
                <input name="color"  
                    value={inputData.color}
                    type="text" 
                    disabled={mode === 0 || mode === 3} 
                    placeholder="색상"
                    ref={inputRefs.color}
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                />
                <input 
                    name="price" 
                    value={inputData.price}
                    type="text" 
                    disabled={mode === 0 || mode === 3} 
                    placeholder="가격"
                    ref={inputRefs.price}
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                />
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
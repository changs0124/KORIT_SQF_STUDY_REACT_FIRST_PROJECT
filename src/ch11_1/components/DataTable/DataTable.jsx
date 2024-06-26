
import { useEffect, useRef, useState } from "react";
import DataTableBody from "../DataTableBody/DataTableBody";
import DataTableHeader from "../DataTableHeader/DataTableHeader";
import "./style.css";
import { SAMPLE_PRODUCTS } from "../../constants/sampleProducts";


function DataTable() {
    const [ mode, setMode ] = useState(0);  // 0 = 조회 모드, 1 = 추가, 2= 수정, 3 = 삭제
    const [ products, setProducts ] = useState([ ...SAMPLE_PRODUCTS ]);
    const [ checkedProducts, setCheckedProducts ] = useState([]);
    const inputRefs = {
        productName: useRef(),
        size: useRef(),
        color: useRef(),
        price: useRef(),
    }

    useEffect(() => {
        const lsProducts = localStorage.getItem("products");
        setProducts(!lsProducts ? [] : JSON.parse(lsProducts));
    }, []);

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products));
    }, [products]);

    return (
        <div className="table-main-container">
            <DataTableHeader mode={mode} setMode={setMode}
            products={products} setProducts={setProducts} 
            checkedProducts={checkedProducts} setCheckedProducts={setCheckedProducts}
            inputRefs={inputRefs}/>
            <DataTableBody mode={mode}
            products={products}
            checkedProducts={checkedProducts} setCheckedProducts={setCheckedProducts}
            inputRefs={inputRefs} />    
        </div>
    );
}

export default DataTable;
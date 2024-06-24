
import { useEffect, useState } from "react";
import DataTableBody from "../DataTableBody/DataTableBody";
import DataTableHeader from "../DataTableHeader/DataTableHeader";
import "./style.css";
import { SAMPLE_PRODUCTS } from "../../constants/sampleProducts";


function DataTable() {
    const [ mode, setMode ] = useState(0);  // 0 = 조회 모드, 1 = 추가, 2= 수정, 3 = 삭제
    const [ products, setProducts ] = useState([ ...SAMPLE_PRODUCTS ]);
    const [ isDeleteRequest, setIsDeleteRequest ] = useState(false);

    useEffect(() => {
        const lsProducts = localStorage.getItem("products");
        setProducts(!lsProducts ? [] : JSON.parse(lsProducts));
    }, []);

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products));
    }, [products]);

    return (
        <div className="table-main-container">
            <DataTableHeader 
            mode={mode} 
            setMode={setMode}
            products={products}
            setProducts={setProducts}
            setIsDeleteRequest={setIsDeleteRequest}
            />
            <DataTableBody 
            mode={mode}
            setMode={setMode}
            products={products}
            setProducts={setProducts}
            isDeleteRequest={isDeleteRequest}
            setIsDeleteRequest={setIsDeleteRequest}
            />    
        </div>
    );
}

export default DataTable;
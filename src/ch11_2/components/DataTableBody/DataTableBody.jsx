import { useEffect, useState } from "react";
import "./style.css";

function DataTableBody({ mode, setMode, products, setProducts, viewProducts, setViewProducts, setIsEditRequest }) {
    const [ checkedAll, setCheckedAll ] = useState(false);

    useEffect(() => {
        if(mode === 0) {
            resetViewProducts();
            setCheckedAll(false);
        }
    }, [products, mode])

    const handleCheckedAllChange = () => {
        setCheckedAll(checked => {
            if(!checked) {
                setViewProducts([ ...products.map(product => ({ ...product, isChecked: true}))]);
            } else {
                resetViewProducts();
            }
            // 상태값 리턴
            return !checked
        });

    }

    useEffect(() => {
        const checkStates = viewProducts.map(product => product.isChecked);
        if(checkStates.includes(false)) {
            setCheckedAll(false);
        } else {
            setCheckedAll(true);
        }
    }, [viewProducts])

    const handleCheckedKeyChange = (e) => {
        if(mode === 2) {
            setViewProducts(viewProducts => {
                return [ ...viewProducts.map(product => {
                    if(product.id === parseInt(e.target.value)) {
                        return {
                            ...product,
                            isChecked: !product.isChecked
                        }
                    }
                    return {
                        ...product,
                        isChecked: false
                    };
                })]
            })
            setIsEditRequest(true);
        }

        if(mode === 3) {
            setViewProducts(viewProducts => {
                return [ ...viewProducts.map(product => {
                    if(product.id === parseInt(e.target.value)) {
                        return {
                            ...product,
                            isChecked: !product.isChecked
                        }
                    }
                    return product;
                })]
            })
        }

    }

    const resetViewProducts = () => {
        setViewProducts([ ...products.map(product => ({ ...product, isChecked: false}))]);
    }
    

    return (
        <div className="table-body">
            <table>
                <thead>
                    <tr>
                        <th>
                            <input 
                                type="checkbox" 
                                disabled={mode !== 3} 
                                onChange={handleCheckedAllChange}
                                checked={checkedAll}
                            />
                        </th>
                        <th>상품코드</th>
                        <th>상품명</th>
                        <th>사이즈</th>
                        <th>색상</th>
                        <th>가격</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        viewProducts.map(product => (
                            <tr key={product.id}>
                                <th>
                                    <input 
                                    type="checkbox" 
                                    disabled={mode === 0 || mode === 1}
                                    checked={product.isChecked}
                                    onChange={handleCheckedKeyChange}
                                    value={product.id}
                                    />
                                </th>
                                <td>{product.id}</td>
                                <td>{product.productName}</td>
                                <td>{product.size}</td>
                                <td>{product.color}</td>
                                <td>{product.price}</td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>
        </div>
    );
}

export default DataTableBody;
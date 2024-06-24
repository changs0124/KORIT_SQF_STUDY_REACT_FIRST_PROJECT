import "./style.css";

function DataTableBody({ mode, products, checkedProducts, setCheckedProducts, inputRefs }) {
    const handleProductChecked = (id) => {
        if(mode === 2) {
            if(!checkedProducts.includes(id)) {
                setCheckedProducts(checkedProduct => checkedProduct.filter((i) => i === id));
            }
            setCheckedProducts(checkedProduct => [ ...checkedProduct, id]);
        }   
        if(mode === 3) {
            if(checkedProducts.includes(id)) {
                setCheckedProducts(checkedProduct => checkedProduct.filter((i) => i !== id));
            }  
            setCheckedProducts(checkedProduct => [ ...checkedProduct, id]);       
        }
    }
    
    const handleAllProductChecked = (e) => {
        if(mode === 3) {
            if(e.target.checked) {
                setCheckedProducts(products.map((product) => product.id));
                return
            }
            setCheckedProducts([]);
        }
    }

    return (
        <div className="table-body">
            <table>
                <thead>
                    <tr>
                        <th><input type="checkbox" disabled={mode !== 3} 
                        onChange={handleAllProductChecked}
                        checked={checkedProducts.length === products.length}/></th>
                        <th>상품코드</th>
                        <th>상품명</th>
                        <th>사이즈</th>
                        <th>색상</th>
                        <th>가격</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => (
                            <tr key={product.id}>
                                <th><input type="checkbox" disabled={mode === 0 || mode === 1}
                                checked={checkedProducts.includes(product.id)}
                                onChange={() => handleProductChecked(product.id)} value={product.id}/></th>
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
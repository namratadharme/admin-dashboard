import React, {useContext } from "react";
import "../../Styles/pagination.scss";
import { ProductContext } from "../../Context/ProductContext";


function ProductPagination(){
const {
        productStartIndex, 
        productEndIndex, 
        productTotalPages,
        productCurrentPage,
        setProductCurrentPage,
        productRowsPerPage,
        setProductRowsPerPage,
        filteredProduct} = useContext(ProductContext)

    return(<>
       <div className="pagination">
        <div className="blank"></div>
        <div className="pagination-right">
        <div className="rows-per-page">
            <span>Rows per page</span>
               <select value={productRowsPerPage} onChange={(e)=>{
                setProductRowsPerPage(Number(e.target.value))
                setProductCurrentPage(1)}}>
                    <option value={12}>12</option>
                    <option value={24}>24</option>
                    <option value={48}>48</option>
                    <option value={72}>72</option>
               </select>
        </div>
        <div className="page-detail">
            <div className="total-page">{productStartIndex + 1}-{Math.min(productEndIndex, filteredProduct.length)} of {filteredProduct.length}</div>
        </div>
        </div>
       </div>
    </>)
}

export default ProductPagination
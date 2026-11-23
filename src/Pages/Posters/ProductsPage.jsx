import React, {useContext, useEffect, useState} from "react";
import ProductHeader from "../../Components/Posters/ProductHeader";
import "../../Styles/poster.scss";
import "../../Styles/common.scss";
import ProductFilters from "../../Components/Posters/ProductFilters";
import ProductGrid from "../../Components/Posters/ProductGrid";
import { OrderContext } from "../../Context/OrderContext";
import ProductPagination from "../../Components/Pagination/ProductPagination";
import { useLocation } from "react-router-dom";
import Toast from "../../ReusableComponent/Toast";
import { CustomerContext } from "../../Context/CustomerContext";


function ProductsPage(){
    const location = useLocation();

    const {toast} = useContext(CustomerContext)
   
    return(<>
    <div className="products-page column">
           <ProductHeader/>
           <div className="product-container">
              <div className="product-left-filter-section"><ProductFilters/></div>
              <div className="product-right-section">
                <ProductGrid/>
                <ProductPagination/>

                <button className="add-product-btn">+</button>
              </div>
           </div>
           <Toast message={toast.message} show={toast.show}/>
    </div>
    </>)
}

export default ProductsPage
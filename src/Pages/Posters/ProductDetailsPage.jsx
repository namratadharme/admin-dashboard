import React from "react";
import ProductHeaderTab from "../../Components/ProductDetails/ProductHeaderTab";
import { Outlet } from "react-router-dom";
import "../../Styles/productDetails.scss";
import ProductFooterAction from "../../Components/ProductDetails/ProductFooterAction";

function ProductDetailsPage(){
  
    
    return(<>
         <div className="product-details-page">
                  <ProductHeaderTab/>
         <div className="product-review-page">
                  <Outlet/>
        </div>

        <div className="product-footer-action">
                <ProductFooterAction/>
         </div>
       </div>
    </>)
}

export default ProductDetailsPage
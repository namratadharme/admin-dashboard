import React, {useContext} from "react";
import ProductCard from "./ProductCard";

function ProductGrid(){
   
    return(<>
       <div className="product-grid">
             <ProductCard/>
       </div>
    </>)
}

export default ProductGrid
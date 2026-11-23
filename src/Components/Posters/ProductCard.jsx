import React, { useContext, useEffect } from "react";
import "../../Styles/poster.scss";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../Context/ProductContext";

function ProductCard() {
    const {paginatedProductData} = useContext(ProductContext)

    const navigate = useNavigate()


  return (

    <>
    <div className="product-input"><input type="search" placeholder="Search..." className="input"/></div>
    <div className="poster-card">
      {paginatedProductData?.length > 0 ? (
       paginatedProductData.map((item) => {
  
  return (
    <div
      key={item.id}
      className="poster-image"
      onClick={() => {
        navigate(`/products/${item.productId}`);
      }}>
      <img
        src={item?.src?.medium}
        alt={`product-${item.id}`}
        loading="lazy"
      />
    </div>
     );
     })
      ) : (
        <p>No products found</p>
      )}
    </div>
   </>
  )
  
}

export default ProductCard;


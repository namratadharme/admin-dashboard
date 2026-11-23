import React from "react";
import "../../Styles/invoiceDetails.scss";
import { Link } from "react-router-dom";
import "../../Styles/invoiceDetails.scss";

function InvoiceDetails({item}){
    return (<>
    <div className="invoice-details">
         <div className="invoice-detail-card-one">
            <div className="invoice-data">
                <h2>Poster Galore</h2>
                <p>{item.firstName}{item.lastName}</p>
                <span>{item.address}</span>
            </div>
            <span>Invoice: {item.id}</span>
         </div>
       
         <div className="invoice-detail-card-two">
            <span className="invoice-data"><h4>Date</h4>{item.invoiceDate}</span>
            <span className="invoice-data"><h4>Order</h4>{item.order}</span>
         </div>
         <div className="invoice-detail-card-three">
               <div className="grid grid-heading">
                <h5>Reference</h5>
                <h5>Unit Price</h5>
                <h5>Quantity</h5>
                <h5>Total</h5>
               </div>
              
              {item.items?.map((product, index) => (
                 <div className="grid grid-item" key={index}>
                    <Link to={`/products/${product.productId}`}state={{ product }} className="hyperlink">
                    {product.reference}
                </Link>
               <span>${product.total / product.quantity}</span>
               <span>{product.quantity}</span>
               <span>${product.total}</span>
              </div>
               ))}
                      
         </div>
    </div>
    </>)
}

export default InvoiceDetails
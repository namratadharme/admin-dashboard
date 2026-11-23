import React from "react";
import { IoMdSave } from "react-icons/io";
import { MdDelete } from "react-icons/md";



function TotalsSection({order, isDirty, handleSave, handleDelete}) {
  
    return (
        <div className="total-container">
        <div className="total-section">

            <h2>Totals</h2>
            <div className="total-card"><p>Sum:</p> <span>{order.total}</span></div>
            <div className="total-card"><p>Delivery Fees:</p> <span>{order.deliveryFees}</span></div>
            <div className="total-card"><p>Tax:</p><span>{order.taxes}</span> </div>
            <div className="total-card"><p>Total:</p><span>{order.total + order.deliveryFees+ order.taxes}</span></div>
          </div>

            <div className="card-footer bg-color">
            <button
             className={`save-btn ${isDirty ? "active" : ""}`}
             disabled={!isDirty}
             onClick={handleSave}>
            <IoMdSave size={20} /> Save
            </button>

            <button
            className="delete-btn"
            disabled={!isDirty}
            onClick={handleDelete}>
            <MdDelete size={20} /> Delete
           </button>
          </div>
       
        </div>
    );
}


export default TotalsSection;
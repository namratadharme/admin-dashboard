import React, { useContext } from "react";
import { OrderContext } from "../../Context/OrderContext";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function InvoiceTableHead() {
  const { invoiceColumn } = useContext(OrderContext);

  return (
    <thead className="table-head">
      <tr>
          <th className="checkbox-cell">
              <div> <MdOutlineKeyboardArrowRight size={20}/>

                  <input type="checkbox" className="input"/>
                  <span>Id</span>
              </div>
        
            </th>
        {invoiceColumn
          .filter((item) => item.visible && item.id !== "id")
          .map((item) => (
            <th key={item.id}>
              {item.label}</th>
          ))}
      </tr>
    </thead>
  );
}

export default InvoiceTableHead;
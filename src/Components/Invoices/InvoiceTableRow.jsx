import React, { useContext } from "react";
import { OrderContext } from "../../Context/OrderContext";
import "../../Styles/invoiceTable.scss";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

function InvoiceTableRow({ item, expandedRow, setExpandedRow}) {
  const { invoiceColumn } = useContext(OrderContext);

  return (
    <tr onClick={()=>setExpandedRow(
      expandedRow === item.id ? null : item.id
    )}>
      <td className="checkbox-cell">
         <div>
           {expandedRow ? <IoIosArrowDown size={17}/> : <MdOutlineKeyboardArrowRight size={20}/>}
             <input type="checkbox" className="input" />
             <span>{item.id}</span>
         </div>
      </td>

      {invoiceColumn
        .filter((col) => col.visible && col.id !== "id")
        .map((col) => {
          if (col.id === "customer") {
            return (
              <td key={col.id}>
                <div className="user-info">
                  <img src={item.avatar} alt={item.firstName} className="img"/>
                  <span className="user-name">
                    {item.firstName} {item.lastName}
                  </span>
                </div>
              </td>
            );
          }

          return <td key={col.id}>
            
             {item[col.id]}</td>;
        })}
    </tr>
  );
}

export default InvoiceTableRow;
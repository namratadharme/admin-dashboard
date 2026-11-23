import React, { useContext } from "react";
import { Link } from "react-router-dom";

function ItemsTable({order}){
 
 
    const tableHeader = [
   "Reference",
   "Unit Price",
   "Quantity",
   "Total"
]
    return(<>
    <h3>Items</h3>
   <table className="items-table">
  <thead className="items-header">
    <tr className="table-row">
      {tableHeader.map((item, index) => (
        <th
          key={index}
          className="table-cell"
          scope="col"
        >
          {item}
        </th>
      ))}
    </tr>
  </thead>

  <tbody className="table-body">
    {order?.map((item, index) => (
      <tr key={index} className="table-row">
        <td className="table-cell reference">
                <Link to={`/products/${item.productId}`} className="hyperlink">
                              {item.reference}
                          </Link>
          </td>
        <td className="table-cell">
          ${item?.total / item.quantity}
        </td>
        <td className="table-cell">{item.quantity}</td>
        <td className="table-cell">${item.total}</td>
      </tr>
    ))}
  </tbody>
</table>
        
   
    </>)
}

export default ItemsTable
import { useContext, useState } from "react";
import React from "react";
import InvoiceTableHead from "./InvoiceTableHead";
import InvoiceTableRow from "./InvoiceTableRow";
import { OrderContext } from "../../Context/OrderContext";
import "../../Styles/invoiceTable.scss";
import InvoiceDetails from "./InvoiceDetails";
import "../../Styles/invoiceDetails.scss";

function InvoiceTable(){
     const {paginatedData, invoiceColumn} = useContext(OrderContext)
     const [expandedRow, setExpandedRow] = useState(null)

    return(<>
   <div className="invoice-table-container">
    <table className="invoice-table">
         <InvoiceTableHead/>
          <tbody>
        {
              paginatedData.map((item)=>(
              <React.Fragment key={item.id}>
              <InvoiceTableRow
              item={item}
              expandedRow={expandedRow}
              setExpandedRow={setExpandedRow}/>

                  <tr className={`invoice-row ${expandedRow === item.id ? "open" : ""}`}>
                    <td colSpan={invoiceColumn.filter(col=>col.visible).length + 1} className="invoice-details-cell">
                       <div className={`invoice-details-wrapper ${
                         expandedRow === item.id ? "open" : ""
                           }`}
                        >
                      <InvoiceDetails item={item}/>
                      </div>
                    </td>
                  </tr>
              </React.Fragment>
            ))
        }
       </tbody>
    </table>
    </div>
    </>)
}

export default InvoiceTable
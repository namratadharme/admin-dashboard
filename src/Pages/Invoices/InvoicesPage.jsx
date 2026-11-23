import React, { useContext } from "react";
import InvoiceHeader from "../../Components/Invoices/InvoiceHeader";
import InvoiceTable from "../../Components/Invoices/InvoiceTable";
import "../../Styles/invoice.scss";
import Pagination from "../../Components/Pagination/Pagination";
import { OrderContext } from "../../Context/OrderContext";

function InvoicesPage(){
    const { filteredOrderData, 
            currentPage, 
            rowsPerPage, 
            startIndex, 
            endIndex,
            totalPages,
            setCurrentPage,
            setRowsPerPage} = useContext(OrderContext)

    return(<> 
    <div className="invoices-page">
          <InvoiceHeader/>
          <div className="table-container">
            <InvoiceTable/>
          </div>
           <Pagination
              filteredData = {filteredOrderData} 
              rowsPerPage={rowsPerPage}
              currentPage={currentPage} 
              setCurrentPage={setCurrentPage} 
              setRowsPerPage={setRowsPerPage}
              startIndex={startIndex}
              endIndex={endIndex} 
              totalPages={totalPages}/>
          </div>
    </>)
}

export default InvoicesPage
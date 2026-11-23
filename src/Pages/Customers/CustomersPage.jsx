import { useContext } from "react";
import CustomerHeader from "../../Components/Customers/CustomerHeader";
import CustomerFilters from "../../Components/Customers/CustomerFilters";
import CustomerTable from "../../Components/Customers/CustomerTable";
import "../../Styles/table.scss";
import "../../Styles/customer.scss";
import Pagination from "../../Components/Pagination/Pagination";
import { CustomerContext } from "../../Context/CustomerContext";
import Toast from "../../ReusableComponent/Toast";
import MobilePagination from "../../Components/Pagination/MobilePagination";

function CustomersPage(){
     const{currentPage, 
          setCurrentPage, 
          rowsPerPage, 
          setRowsPerPage, 
          startIndex, 
          endIndex,
          totalPages,
          toast,
          } = useContext(CustomerContext) 
          

    return(<>
    <div className="customers-page">
         <CustomerHeader/>
         <div className="customer-main-content">
            <CustomerFilters/>
            <div className="customer-table">
            <CustomerTable/>
          
                <Pagination 
                currentPage={currentPage}
                rowsPerPage={rowsPerPage}
                startIndex={startIndex}
                endIndex={endIndex}
                totalPages={totalPages}
                setRowsPerPage={setRowsPerPage}
                setCurrentPage={setCurrentPage}/>

               <Toast message={toast.message} show={toast.show}/>
            </div>

          <div className="mobile-pagination-wrapper">
           <MobilePagination/>
        </div>
        <button className="add-product-btn">+</button>
         </div>
    </div>
    </>)
}

export default CustomersPage
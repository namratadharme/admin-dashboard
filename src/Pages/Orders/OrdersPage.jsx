import {useContext} from "react";
import OrdersHeader from "../../Components/Orders/OrdersHeader";
import OrdersTable from "../../Components/Orders/OrdersTable";
import "../../Styles/table.scss";
import OrderTabs from "../../Components/Orders/OrderTabs";
import Pagination from "../../Components/Pagination/Pagination";
import MobilePagination from "../../Components/Pagination/MobilePagination";
import { OrderContext } from "../../Context/OrderContext";
import Toast from "../../ReusableComponent/Toast";
import { CustomerContext } from "../../Context/CustomerContext";

function OrdersPage(){
    const {
  filteredOrderData,
  rowsPerPage,
  currentPage,
  setCurrentPage,
  setRowsPerPage,
  startIndex,
  endIndex,
  totalPages,
} = useContext(OrderContext);

const {toast} = useContext(CustomerContext)


    return (<>
    <div className="order-page">
        <OrdersHeader/>
        <OrderTabs/>
        <OrdersTable/>

         <div className="desktop-pagination">
            <Pagination 
             filteredData={filteredOrderData}
             rowsPerPage={rowsPerPage}
             currentPage={currentPage}
             setCurrentPage={setCurrentPage}
             setRowsPerPage={setRowsPerPage}
             startIndex={startIndex}
             endIndex={endIndex}
             totalPages={totalPages}/>
        </div>
     
        <div className="mobile-pagination-wrapper">
           <MobilePagination/>
        </div>
         <Toast message={toast.message} show={toast.show}/>
    </div>
    
    </>)
}


export default OrdersPage
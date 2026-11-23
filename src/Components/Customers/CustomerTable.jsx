import {useContext} from "react";
import CustomerTableHead from "./CustomerTableHead";
import CustomerTableRow from "./CustomerTableRow";
import { CustomerContext } from "../../Context/CustomerContext";
import "../../Styles/table.scss";
import { customerColumnDetail } from "../../Data/customerColumnDetail";
import MobileTableCard from "../Orders/MobileOrderCard";

function CustomerTable(){
  const {paginatedData} = useContext(CustomerContext)
   
    return(<>
    <div className="table-container">
    <table className="table">
         <CustomerTableHead/>
        <tbody>
             {
            paginatedData.map((item)=>(
              <CustomerTableRow
              key={item.customerId}
              item={item}/>
            ))
        }
        </tbody>
    </table>
      <div className="mobile-table-list">

          {paginatedData.map((item) => (
           <MobileTableCard
            item={item}
            key={item.customerId}
            columnData={customerColumnDetail}
            title={`${item.firstName} ${item.lastName}`}
            editLink={`/identity/${item.customerId}`}
            />
          ))}


  </div>
    </div>
    </>)
}

export default CustomerTable
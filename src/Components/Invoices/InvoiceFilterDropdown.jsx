import React from "react";
import { IoFilterOutline } from "react-icons/io5";
import "../../Styles/invoice.scss";

function InvoiceFilterDropdown({openDropDownMenu, handleClick}){

     const invoiceFilterData = [
  {
    id: "customer",
    label: "Customer"
  },
  {
    id: "order",
    label: "Order"
  }
];
    return(<>
  <div className="invoice-filter-dropdown">
  <span onClick={() => handleClick("AddFilter")}>
    <IoFilterOutline />
    ADD FILTER
  </span>

 <div className="dropdown-wrapper">
    {openDropDownMenu.AddFilter && (
    <div className="dropdown position">
      {invoiceFilterData.map((item) => (
        <div className="gap" key={item.id}>
          <input type="checkbox" />
          {item.label}
        </div>
      ))}
    </div>
  )}
 </div>

</div>
    </>)
}

export default InvoiceFilterDropdown
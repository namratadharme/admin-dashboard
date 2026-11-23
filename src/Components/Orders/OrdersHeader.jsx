import {useContext, useState} from "react";
import "../../Styles/orderHeader.scss";
import { IoMdDownload } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import DynamicFilters from "./DynamicFilters";
import FilterDropdown from "./FilterDropdown";
import ColumnDropdown from "./ColumnDropdown";
import "../../Styles/common.scss";
import { handleExport } from "../../Utils/exportCsv";
import { OrderContext } from "../../Context/OrderContext";
import {filterOrderData} from "../../Data/filterData";
import { filterOrderInputData } from "../../Data/filterInputData";


function OrdersHeader(){
  
     const {filters, 
            filterValue,
            setFilterValue,
            handleToggleFilter, 
            filteredOrderData,
            column, 
            handleToggleColumn, 
            handleResetButton,
            setInputSearch,
            inputSearch
            } = useContext(OrderContext)
    
    const [openDropDownMenu, setOpenDropDownMenu] = useState({
        AddFilter : false,
        Column: false,
    })

    function handleClick(value){
        setOpenDropDownMenu((prev)=>({
               ...prev,
            [value]: !prev[value]
        }))
    }
  
    return (<>
    <div className="order-header">
     <div className="left-header">

    <div className="search-filter-container">

        <div className="input-grp">
             <input
                className="input-field"
                type="text"
                onChange={(e) => setInputSearch(e.target.value)}
                placeholder="Search..."
                value={inputSearch}
                name="input"
             />
            <IoMdSearch className="icon" size={20} />
        </div>

        <DynamicFilters
            handleToggleFilter={handleToggleFilter}
            filterInputData={filterOrderInputData}
            filters={filters}
            filterValue={filterValue}
            setFilterValue={setFilterValue}/>

    </div>
</div>
        <div className="right-header-content">
               <FilterDropdown openDropDownMenu={openDropDownMenu} handleClick={handleClick} 
               filters={filters} handleToggleFilter={handleToggleFilter} filterData={filterOrderData}/>
               
               <ColumnDropdown openDropDownMenu={openDropDownMenu} handleClick={handleClick}
               handleResetButton={handleResetButton} column={column} handleToggleColumn={handleToggleColumn}/> 

               <span onClick={()=>handleExport(filteredOrderData)}><IoMdDownload className="right-icon"/>
               <p className="export">EXPORT</p></span>
        </div>
   
    </div>
    </>)
}

export default OrdersHeader
import {useContext} from "react";
import { IoFilterOutline } from "react-icons/io5";


function FilterDropdown({
  openDropDownMenu,
  handleClick,
  filters,
  handleToggleFilter,
  filterData
}){

      
    return(<>
          <span onClick={()=>handleClick("AddFilter")}><IoFilterOutline className="right-icon"/><p className="text">ADD FILTER</p></span>
          <div className="dropdown-wrapper">
                     {openDropDownMenu.AddFilter && <div className="dropdown filter-width filter-position">
                          {filterData.map((item)=>(
                            <div key={item.value} className="gap">
                                <input type="checkbox" checked={filters[item.value] || false}
                                onChange={()=>handleToggleFilter(item.value)}/>{item.label}
                            </div>))}
                     </div>}
          </div>
                 
    </>)
}

export default FilterDropdown
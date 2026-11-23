import { useContext, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FiPlusCircle } from "react-icons/fi";
import { filters } from "../../Data/filterCustomerData.jsx";
import {FaRegBookmark} from "react-icons/fa"; 
import "../../Styles/customer.scss";
import "../../Styles/review.scss";
import { CustomerContext } from "../../Context/CustomerContext.jsx";
import { RxCrossCircled } from "react-icons/rx";
import SaveQueryModal from "../../ReusableComponent/SavedQueryModal.jsx";
import "../../Styles/queryModal.scss";
import RemoveQueryModal from "../../ReusableComponent/RemoveQueryModal.jsx";
import { CiCircleMinus } from "react-icons/ci";

function CustomerFilters(){
    const {customerFilterValue, setCustomerFilterValue} = useContext(CustomerContext)
    const [showModal, setShowModal] = useState(false);
    const [queryName, setQueryName] = useState("")
    const [showRemoveModal, setShowRemoveModal] = useState(false)
    const [savedQueries, setSavedQueries] = useState([]);

    const handleSave = () => {
                        if (!queryName.trim()) return;

                        setSavedQueries((prev) => [
                         ...prev,
                         queryName.trim(),
                         ]);

                        setQueryName("");
                        setShowModal(false);
                        };

    const handleRemoveQuery = () =>{
                        setShowRemoveModal(false)
                        setSavedQueries([])
                        }       

    return(<>
    <div className="customer-filter">
        <div className="input-contain">
             <input type="text" placeholder="Search" className="input"/>
               <IoSearchOutline className="icon"/>
        </div>
       

              <div className="queries">
                     <span>
                      <FaRegBookmark size={20}/>SAVED QUERIES 
                      {savedQueries.length > 0 ? <CiCircleMinus size={20} 
                      onClick={()=>setShowRemoveModal(true)}/> :<FiPlusCircle size={20} 
                      className="add-query" onClick={()=>setShowModal(true)}/>}
                    </span>
                    {
                        showModal && <SaveQueryModal 
                        queryName={queryName}
                        setQueryName={setQueryName}
                        onCancel={()=>setShowModal(false)}
                        onSave={handleSave}/>
                    }
                    {
                        showRemoveModal && <RemoveQueryModal
                           onCancel={() => setShowRemoveModal(false)}
                           onConfirm={handleRemoveQuery}/>
                    }
                    <div className="saved-query-list">
                        {savedQueries.map((query, index) => (
                        <div className="saved-query-item" key={index}>
                        {query}
                        </div>
                        ))}
                    </div>
              </div>


              {filters.map((filter) => (
               <div className="filter-section" key={filter.title}>
                <div className="filter-header">
                   {filter.icon}
                <span className="filter-title">{filter.title}</span>
                </div>

                <div className="filter-options">
                {filter.options?.map((option) => {
                    const isSelected = customerFilterValue[filter.key] === option

                 return(<div key={option} 
                    className={`filter-textdata${isSelected ? "selected-filter" : ""}`} onClick={()=>{
                    
                    setCustomerFilterValue((prev)=>({
                        ...prev,
                        [filter.key]: option,
                    }))
                 }}>{option}
                 {
                    isSelected &&  <RxCrossCircled 
                    size={18}
                     onClick={(e)=> {
                        e.stopPropagation(),
                        setCustomerFilterValue((prev)=>({
                            ...prev,
                            [filter.key]: "",
                        }))
                      }}/>
                }</div>
                 )})}
                </div>
                </div>
                ))}
    </div>
    </>)
}

export default CustomerFilters
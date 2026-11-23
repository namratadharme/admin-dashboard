import { useContext } from "react";
import Button from "../../Components/Button/Button";
import { MdDelete } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { ProductContext } from "../../Context/ProductContext";
import { useNavigate } from "react-router-dom";
import { CustomerContext } from "../../Context/CustomerContext";

function ProductFooterAction(){
    const {isDirty, setIsDirty} = useContext(ProductContext)
    const navigate = useNavigate()
    const {showToast} = useContext(CustomerContext)

 function handleSave() {
  setIsDirty(false);
  showToast("product updated")
  navigate("/products");
}

 function handleDelete() {
  setIsDirty(false);
  showToast("product deleted")
  navigate("/products");
}

    return (<> 
          <div className="btn-action-grp">
                   <Button className={`save-btn ${isDirty ? "active" : ""}`} 
                    disabled={!isDirty}
                    onClick={handleSave}><FaSave/>SAVE</Button>
                   <Button className="delete-btn" 
                    onClick={handleDelete}><MdDelete/>DELETE</Button>        
         </div>
         
    </>)
}

export default ProductFooterAction
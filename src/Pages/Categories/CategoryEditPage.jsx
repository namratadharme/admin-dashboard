import React, {useContext} from "react";
import CategoryEdit from "../../Components/Categories/CategoryEdit";
import { ProductContext } from "../../Context/ProductContext";

function CategoryEditPage(){
    const {handleDeleteCategory} = useContext(ProductContext)
    
    return(
        <CategoryEdit/>
    )
}

export default CategoryEditPage
import React, {useContext} from "react";
import CategoryCard from "./CategoryCard";
import { ProductContext } from "../../Context/ProductContext";

function CategoriesGrid(){
       const {category} = useContext(ProductContext)

    return(<>
    <div className="categories-grid">
       {category?.map((item)=>(
          <CategoryCard key={item.title} item={item}/>
       ))}
     
    </div>
    </>)
}

export default CategoriesGrid
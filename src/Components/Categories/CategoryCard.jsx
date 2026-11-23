import React from "react";
import "../../Styles/categories.scss";
import Button from "../Button/Button";
import { MdEdit } from "react-icons/md";
import { PiImagesFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

function CategoryCard({item}){
    const navigate = useNavigate();

    const handleProductsClick = () =>{
        navigate(`/products?category=${item.title}`);
    }
    
const handleEdit = (category) => {
    navigate(`/categories/${category.toLowerCase()}/edit`);
};
    return(<>
       <div className="category-card">
            <img src={item.image} className="img" alt={item.title} loading="lazy"/>
            <h4 className="category-title">{item.title}</h4>
            <div className="category-btn">
            <Button className="product" onClick={handleProductsClick}><PiImagesFill size={15}/>PRODUCT</Button>
            <Button className="edit" onClick={()=>handleEdit(item.title)}><MdEdit size={15}/>EDIT</Button>
            </div>
       </div>
    </>)
}

export default CategoryCard
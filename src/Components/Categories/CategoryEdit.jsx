import { useContext, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../Context/ProductContext";
import "../../Styles/categoryEdit.scss";
import { MdEdit } from "react-icons/md";
import Button from "../Button/Button";
import { MdDelete } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Toast from "../../ReusableComponent/Toast";
import { RxCross2 } from "react-icons/rx";


function CategoryEdit() {
    const [selectAll, setSelectAll] = useState(false);
    const [showToast, setShowToast] = useState(false)
    const { category } = useParams();
    
    const { 
        posterImg, 
        handleDeleteCategory,    
        handleSelectedProduct,
        handleDeleteSelectedProduct,
        selectedCategoryProduct,
        setSelectedCategoryProduct} = useContext(ProductContext);

    const navigate = useNavigate()

    const categoryProducts = useMemo(() => { 
        return posterImg?.filter( (item) => item.category === category ); 
    }, [posterImg, category]);

    return (
        <div className="edit-page">
            <div className="edit-page-padding">

            <input type="text" placeholder="Category name" value={category} className="input" readOnly/>
            {selectedCategoryProduct.length > 0 ?
                <div className="selected-bar">
                       <span>
                        <RxCross2 onClick={()=>setSelectedCategoryProduct([])}/>
                        {selectedCategoryProduct?.length} 
                        {selectedCategoryProduct?.length === 1 ? "item selected" : "items selected"}
                       </span>
                       <Button className="delete-btn" onClick={()=>{
                        handleDeleteSelectedProduct(),
                        setShowToast(true)
                        } 
                        }><MdDelete/>DELETE
                       </Button>
                </div> : <label className="label">Products</label>}

            <table>
                <thead>
                    <tr>
                        <th className="input-img-container">
                           <input type="checkbox" checked={selectAll}
                            onClick={(e) => e.stopPropagation()}
                            onChange={(e) => setSelectAll(e.target.checked)}/>
                            <label>Reference</label>
                        </th>
                        <th>Price</th>
                        <th>Width</th>
                        <th>Height</th>
                        <th>Stock</th>
                        <th>Sales</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {categoryProducts?.map((item) => (
                        <tr key={item.id} onClick={()=>navigate(`/products/${item.productId}`)}>
                            <td className="input-img-container">
                            <input 
                            type="checkbox" 
                            onClick={(e) => e.stopPropagation()}
                            checked={selectAll || selectedCategoryProduct.includes(item.id)} 
                            onChange={() => handleSelectedProduct(item.id)}/>

                                <img
                                    src={item?.src?.small}
                                    alt="product"
                                    width="25px"
                                    height="20px"
                                />
                            {item.reference}
                            </td>
                            <td>${item.price}</td>
                            <td>{item.width}</td>
                            <td>{item.height}</td>
                            <td>{item.stock}</td>
                            <td>{item.sales}</td>
                            <td><button className="edit"><MdEdit size={15}/>Edit</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
              <div className="btn-action-grp">
                   <Button className="save-btn"><FaSave/>SAVE</Button>
                  <Button className="delete-btn" onClick={()=>{
                    handleDeleteCategory(category)
                 
                    setTimeout(() => {
                        setShowToast(true)
                        navigate("/categories");
                    }, 500);
                   
                 }
                 }><MdDelete/>DELETE</Button>
              </div>
              
          
            <Toast message="category deleted" show={showToast}/>
        </div>
    );
}

export default CategoryEdit;
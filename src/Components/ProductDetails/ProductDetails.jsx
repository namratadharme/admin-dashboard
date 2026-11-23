import { useContext, useState, useEffect } from "react";
import "../../Styles/productDetails.scss";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../Context/ProductContext";
import { BsCurrencyEuro } from "react-icons/bs";

function ProductDetails(){
  const {setIsDirty} = useContext(ProductContext);

    const [formData, setFormData] = useState({
           reference: "",
           width: "",
           height: "",
           stock: "",
           sales: "",
           price: "",
          })

      const {posterImg} = useContext(ProductContext)
       const {id} = useParams()

       const selectedItem = posterImg.find((item)=>item.productId === Number(id))

        useEffect(()=>{
             if(selectedItem){
              setFormData ({
               reference: selectedItem.reference,
               width: selectedItem.width,
               height: selectedItem.height,
               stock: selectedItem.stock,
               sales: selectedItem.sales,
               price: selectedItem.price,
              })
              setIsDirty(false)
             }
   
        },[selectedItem])

        const dpi = 300;

     const widthCm = ((formData.width / dpi) * 2.54).toFixed(2);
     const heightCm = ((formData.height / dpi) * 2.54).toFixed(2);

     const handleChange = (e) =>{
        const {name, value} = e.target;

        setFormData((prev)=>({
            ...prev,
            [name]: value
        }))
        setIsDirty(true)
     }
const firstRow = [
  { label: "Reference", name: "reference", type: "text" },
  { label: "Category", 
    name: "category", 
    type: "select" ,
    option: ["water","travel","tech","sports","people","nature","food","flowers","city","cars","business","beard","animals"]
},
];

const secondRow = [
  { label: "Width", name: "width", type: "number", value: widthCm, unit: "cm" },
  { label: "Height", name: "height", type: "number", value: heightCm, unit: "cm" },
];

const thirdRow = [
  { label: "Price", name: "price", type: "number", icon: <BsCurrencyEuro /> },
  { label: "Stock", name: "stock", type: "number" },
  { label: "Sales", name: "sales", type: "number" },
];  
                             
    return(<>
   <div className="product-overview">

  <div className="row two-column">
    {firstRow.map((item) => (
         <div className="input-group" key={item.name}>
            <label className="label">{item.label}</label>
            <div className="input-wrapper">
                {
                item.type === "select" ? 
               (<select name={item.name} onChange={handleChange} value={formData[item.name]} className="input">
                <option value="">select categorey</option>
                     {item.option.map((subItem)=>(
                        <option key={subItem} value={subItem}>{subItem}</option>
                     ))}

                </select>
               )
                  :
                  ( <input type="text" name={item.name} value={item.value ?? formData[item.name]}
                onChange={handleChange} className="input"/>)
               }
               
            </div>
            
         </div>
    ))}
  </div>

  <div className="row two-column">
    {secondRow.map((item) => (
           <div className="input-group" key={item.name}>
            <label className="label">{item.label}</label>
            <div className="input-wrapper">
               <input type="text" name={item.name} value={item.value ?? formData[item.name]}
               onChange={handleChange} className="input"/>
               <span className="suffix">{item.unit}</span>
            </div>
            
         </div>
    ))}
  </div>

  <div className="row three-column">
    {thirdRow.map((item) => (
           <div className="input-group" key={item.name}>
            <label className="label">{item.label}</label>
            <div className="input-wrapper">
                <span className="prefix">{item.icon}</span>
                <input type="text" name={item.name} value={item.value ?? formData[item.name]}
                onChange={handleChange} className="input"/>
            </div>
            
         </div>
    ))}
  </div>

</div>
    </>)
}

export default ProductDetails
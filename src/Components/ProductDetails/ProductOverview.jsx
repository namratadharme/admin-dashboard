import { useContext, useEffect, useState } from "react";
import "../../Styles/productDetails.scss";
import "../../Styles/common.scss";
import { ProductContext } from "../../Context/ProductContext";
import { useParams} from "react-router-dom";


function ProductOverview(){
      const {id} = useParams();
      const {posterImg, setIsDirty} = useContext(ProductContext)
      const [imgDetail, setIsImgDetail] = useState("")
     

    const selectedItem = posterImg.find((item)=>item.productId === Number(id))

    useEffect(()=>{
        if(selectedItem?.src.small){
            setIsImgDetail(selectedItem?.src.small)
        }

    },[selectedItem])

    function handleChange(e){
        setIsImgDetail(e.target.value)
        setIsDirty(true)
    }

    return(<>
    <div className="product-overview">

        <div className="product-left-container">
        <div className="image-container">
            <img src={selectedItem?.src?.medium} className="image" loading="lazy"/>
        </div>
        <div className="input-contain">
            <label>image</label>
            <input type="text" value={imgDetail} className="input" onChange={handleChange}/>
        </div>
        <div className="input-contain">
            <label>Thumbnail</label>
            <input type="text" value={imgDetail} className="input" onChange={handleChange}/>
        </div>
       </div>
       
   
    </div>
    </>)
}

export default ProductOverview
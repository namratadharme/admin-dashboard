import React, {useState, useContext} from "react";
import "../../Styles/identity.scss";
import "../../Styles/common.scss";
import { ProductContext } from "../../Context/ProductContext";

function AddressSection({identityData}){
     const [input, setInput] = useState({
        address: identityData.address || "",
        city: identityData.city || "",
        state: identityData.state || "",
        zipCode: identityData.zipCode || ""
     })
     const {setIsDirty} = useContext(ProductContext)


     function handleChange(e){
        const {name, value} = e.target;

        setInput((prev)=>({
            ...prev,
            [name]: value,
        }))
        setIsDirty(true)
     }


    return (<>
    <div className="address">
        <h4>Address</h4>
        <div className="identity-input-group">
            <label>address</label>
            <input type="text" name="address" className="identity-input-field" 
            onChange={handleChange}
             value={input.address} placeholder="Address"/>
        </div>
       
             <div className="address-input-group">
                      <div className="identity-input-group">
                         <label>city</label>
                         <input type="text" name="city" className="identity-input-field" value={input.city}
                          onChange={handleChange} placeholder="City"/>  
                      </div>

                      <div className="identity-input-group">
                          <label>state</label>  
                          <input type="text" name="state" className="identity-input-field" value={input.state}
                          onChange={handleChange} placeholder="State"/>  
                      </div>
            
                      <div className="identity-input-group">
                            <label>Zipcode</label>      
                            <input type="text" name="zipCode" className="identity-input-field" value={input.zipCode}
                             onChange={handleChange} placeholder="Zipcode"/>
                      </div>
                
            </div>
          
    
    </div>
    </>)
}

export default AddressSection
import { useContext, useState } from "react";
import "../../Styles/common.scss";
import "../../Styles/identity.scss";
import { ProductContext } from "../../Context/ProductContext";

function PasswordSection({IdentityData}){
    const {setIsDirty} = useContext(ProductContext)

    const [input, setInput] = useState({
      password: "",
      confirmPassword: "",
    })


     function handleChange(e) {
        const {name, value} = e.target;

        setInput((prev)=>({
          ...prev,
          [name]: value,
        }));

      setIsDirty(true)
      }

    return(<>
    <div className="password-grp">
    <h4>Change Password</h4>
    <div className="pass-section">
         <input type="password" value={input.password} name="password" placeholder="Password"
         onChange={handleChange} className="identity-input-field"/>
         <input type="password" value={input.confirmPassword} name="confirmPassword"
         onChange={handleChange} placeholder="Confirm password" className="identity-input-field"/>
    </div>
    </div>
    </>)
}

export default PasswordSection
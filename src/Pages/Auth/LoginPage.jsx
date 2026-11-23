import {useState, useEffect} from "react";
import "../../Styles/auth.scss";
import { userLoginData } from "../../Services/user.services";
import { useNavigate } from "react-router-dom";
import "../../Styles/common.scss";
import { IoIosLock } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa";

function Login(){
    const navigate = useNavigate()

   const [formData, setFormData] = useState({
          email: "",
          password: "",
          })
   const [error, setError] = useState("")
   const [isDisable, setIsDisable] = useState(true)
   const [loading, setLoading] = useState(false)
   const [showPassword, setShowPassword] = useState(false)

   function handleChange(e){
      setFormData({...formData,[e.target.name]: e.target.value})
   }

  function handleSubmit(e){
    e.preventDefault()
     if(validation()){
         async function fetchUserData(){
      try{
        setLoading(true)
         const response = await userLoginData({
            email: formData.email,
            password: formData.password,
          })
        
        localStorage.setItem("token", response.token)
          navigate("/dashboard")
          setFormData({
          email:"",
          password:""
           })
      }
      catch(error){
        console.log(error)
      }
      finally{
        setLoading(false)
      }   
}
      fetchUserData()
     }
  }
  function validation(){
   if(!formData.email.includes("@")){
    setError("email contain @")
    return false
   }
   if(!formData.email.includes(".")){
    setError("email contain .")
    return false
   }
   if(formData.password.length < 8){
     setError("password contain atleast 8 digit")
     return false
   }
   setError("")
   return true
  }

  useEffect(()=>{
    if(formData.email === "" || formData.password === ""){
      setIsDisable(true)
    }
    else{
      setIsDisable(false)
    }

  },[formData.email, formData.password])

useEffect(()=>{
   const token = localStorage.getItem("token")
   if(token){
      navigate("/dashboard")
   }
},[navigate])


    return (<>
    <div className="container">
   
    <form onSubmit={handleSubmit} className="sub-container">
  
           <div className="icon-container">
            <IoIosLock size={20}/>
           </div>
          <p className="pass-hint">Hint: demo / demo</p>
    <div className="login-input-grp">
             <label>Email</label>
             <input 
             type="text" 
             className="login-input-field" 
             placeholder="type email" 
             alt="input" 
             name="email" 
             value={formData.email} 
             onChange={handleChange}/>
     </div>

  <div className="login-input-grp">
  <label>Password</label>

  <div className="password-wrapper">
    <input
      type={showPassword ? "text" : "password"}
      className="login-input-field"
      placeholder="type password"
      name="password"
      value={formData.password}
      onChange={handleChange}
    />

    <button
      type="button"
      className="eye-btn"
      onClick={() => setShowPassword(prev => !prev)}
      aria-label={showPassword ? "Hide password" : "Show password"}
    >
      {showPassword ? <IoMdEye /> : <FaEyeSlash /> }
    </button>
  </div>
</div>
    <p>{error ? error : ""}</p>
    <button type="submit" disabled={isDisable || loading}>{loading ? "Loading..." : "SIGNIN"}</button>
    </form>
   </div>
    </>)
}
export default Login
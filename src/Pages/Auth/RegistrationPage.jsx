import {useState, useEffect} from "react";
import "../../Styles/auth.scss";
import regImg from "../../assets/reg.jpeg";
import {userRegisterData} from "../../Services/user.services.js";
import { useNavigate } from "react-router-dom";

function Registration(){
    const navigate = useNavigate()

   const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
   })
   const [error, setError] = useState("")
   const [isDisable, setIsDisable] = useState(true)
   const [loading, setLoading] = useState(false)

   function handleChange(e){
      setFormData({...formData,[e.target.name]: e.target.value})
   }

  function handleSubmit(e){
    e.preventDefault()
     if(validation()){
        
      async function fetchUserData(){
        try{
           setLoading(true)
           const response = await userRegisterData({
            userName: formData.userName,
            email: formData.email,
            password: formData.password,
            confirmPassword: formData.confirmPassword,
            gender: formData.gender, 
         })
       
       
         navigate("/")
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
    setFormData({
          userName: "",
          email: "",
          password: "",
          confirmPassword: "",
          gender: ""
       })
   return true
  }

  useEffect(()=>{
    if(formData.userName === "" || formData.email === "" 
      || formData.password === "" || formData.confirmPassword === "" 
      || formData.gender === ""){
      setIsDisable(true)
    }
    else{
      setIsDisable(false)
    }

  },[formData.userName, formData.email, formData.password, formData.confirmPassword, formData.gender])


    return (<>
    <div className="container">
    <img src={regImg} alt="reg-img"/>
    <form onSubmit={handleSubmit} className="sub-container">
    <span>UserName</span>
    <input type="text" placeholder="type here" alt="input" name="userName" value={formData.userName} onChange={handleChange}/>

    <span>Email</span>
    <input type="text" placeholder="type here" alt="input" name="email" value={formData.email} onChange={handleChange}/>

    <span>Password</span>
    <input type="password" placeholder="type here" alt="input" name="password" value={formData.password} onChange={handleChange}/>

    <span>Confirm Password</span>
    <input type="password" placeholder="type here" alt="input" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange}/>

    <span>Gender</span>
    <select onChange={handleChange} name="gender">
        <option value="">Select Gender</option>
        <option>Male</option>
        <option>Female</option>
    </select>
    <p>{error ? error : ""}</p>
    <button type="submit" disabled={isDisable}>{loading ? "Loading..." : "Sign up"}</button>
    </form>
   </div>
    </>)
}

export default Registration
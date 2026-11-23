import axios from "axios";

const userData = [
{
   userName: "Namrata Dharme",
   email: "namrata@gmail.com",
   password: "12345678",
   confirmPassword: "12345678",
   gender: "female",
}
]
const dummyToken = {
    token: "authToken",
    message: "success"
}

const api_key = "R2rPao0dm86L6aov41mpHnhLe91V3AWV5SPsFIKLvFFI9U2z1ca4AQmM";

export function userRegisterData({userName, email, password, confirmPassword, gender}){
    return new Promise((resolve, reject) => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        if(userData){
            resolve(userData)
            return {userData}
        }
       
    })
}
 export function userLoginData({email, password}){
    return new Promise((resolve, reject) => {
        axios.post("https://jsonplaceholder.typicode.com/users")
        if(dummyToken){
            resolve(dummyToken)
            return {dummyToken}
        }
    })
}
export function fetchUserProfile(){
    return new Promise((resolve, reject) => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        if(userData){
            resolve(userData)
            return {userData}
        }
    })
}

export function fetchOrderData(){
   return axios.get("/orderdetail.json")
    .then((res)=>res.data)
    .catch((error)=>console.log(error))
}

export function fetchPosterImages(category){

   return axios.get(`https://api.pexels.com/v1/search?query=${category}&per_page=15`,

      {
         headers:{
            Authorization: api_key
         }
      }
   )
   .then((res)=>
      res.data.photos
   )
   .catch((error)=>
      console.log(error)
   )
}

export function fetchCustomerData(){
    return axios.get("/customer.json")
    .then((res)=>res.data)
    .catch((error)=>console.log(error))
}

export function fetchCustomerReview(){
    return axios.get("/review.json")
    .then((res)=>res.data)
    .catch((error)=>console.log(error))
}

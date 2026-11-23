import React from "react";
import  {
  createContext,
  useState,
  useEffect,
  useMemo
} from "react";
import { fetchCustomerData, fetchCustomerReview, fetchOrderData, fetchPosterImages} from "../Services/user.services";

export async function loadOrders() {
  try {
    const storedData = localStorage.getItem("orders");

    if (storedData) {
      return JSON.parse(storedData);
    }

    const response = await fetchOrderData();

    localStorage.setItem(
      "orders",
      JSON.stringify(response)
    );

    return response;

  } catch (err) {
    console.log(err);
    return [];
  }
}
const categories = [
   "food",
   "nature",
   "city",
   "flower",
   "travel",
   "sports",
   "animal",
   "beard",
   "tech",
   "cars",
   "people",
   "business",
   "water"
]

export async function loadPosterImage(){
   try{
      const storedPosterImage = localStorage.getItem("posterImg")
      if(storedPosterImage){
         return JSON.parse(storedPosterImage)
      }
      else{
         let allImages = []

         for(let category of categories){
              const response = await fetchPosterImages(category);
               const updatedResponse = response.map((img)=>({
                  ...img,
                  category: category,
               }))
           allImages = [...allImages,...updatedResponse]
         }  
         
           const finalData = allImages.map((item, index) => ({
            ...item,
            productId: index + 1
        }));

           localStorage.setItem("posterImg",JSON.stringify(finalData))
          return finalData
      }     
   }
      catch(error){
       console.log(error)
       return []
   }
}

export async function LoadCustomerData(){
   try{
      const storedData = localStorage.getItem("customerData")
         if(storedData){
             return JSON.parse(storedData)
         }
         else{
             const response = await fetchCustomerData();
             localStorage.setItem("customerData",JSON.stringify(response))
             return response
         }
   }
   catch(error){
       console.log(error)
   }
}

export async function loadProductReview(){
    
     try {
         const storedData = localStorage.getItem("reviewData")
           if(storedData){
              return  JSON.parse(storedData)
           }
           else{
               const response = await fetchCustomerReview();
               localStorage.setItem("reviewData", JSON.stringify(response))
               return response
           }
         
     }
     catch(error){
            console.log(error)
            return []
     }
}


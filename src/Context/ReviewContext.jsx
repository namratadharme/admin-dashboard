import React, { createContext, useState, useEffect, useMemo, useCallback, useContext } from "react";
import { useColumnVisibility } from "../Hooks/useColumnVisibility";
import { useSearchParams } from "react-router-dom";
import { reviewColumnData } from "../Data/customerColumnDetail";
import { loadProductReview } from "../Utils/localStorage";
import { filterReviews } from "../Utils/filterOrders";
import { getPaginationData } from "../Utils/pagination";
import { LoadCustomerData } from "../Utils/localStorage";
import { ProductContext } from "./ProductContext";
import { CustomerContext } from "./CustomerContext";

export const ProductReviewContext = createContext()

 const ProductReviewProvider = ({children}) =>{
           const [reviewData, setReviewData] = useState([])
           const [currentPage, setCurrentPage] = useState(1)
           const [rowsPerPage, setRowsPerPage] = useState(25)
           const [selectReview, setSelectReview] = useState(null)
          const [selectedProductId, setSelectedProductId] = useState(null)
          const [inputSearch, setInputSearch] = useState("")

           const [searchParams] = useSearchParams();
           const customerId = searchParams.get("customerId");

         
             const { posterImg } = useContext(ProductContext);
             const { customerData } = useContext(CustomerContext);

                 const [reviewFilters, setReviewFilters] = useState({
                
                   status: false,
                   customer: false,
                   product: false,
                   postedSince: false,
                   postedBefore: false,
                   returned: false,
                 })
                 const [reviewFilterValue, setReviewFilterValue] = useState({
                   status: "",
                   customer: "",
                   product: "",
                   postedSince: "",
                   passedBefore: "",
                 })

               const {
                 column: reviewColumn,
                 handleToggleColumn: handleToggleReviewColumn,
                 handleResetButton: handleToggleResetButton,
               } = useColumnVisibility(reviewColumnData)


           useEffect(() => {
              async function fetchData() {
              const reviews = await loadProductReview();
              const customers = await LoadCustomerData();
           
              const enrichedReviews = reviews.map((review) => {

                  const product = posterImg.find(
                 item => Number(item.productId) === Number(review.productId)
                 );

                const customer = customers.find(
                item => Number(item.customerId) === Number(review.customerId)
               );


             return {
             ...review,
             productName: product?.reference,
             customerName: `${customer?.firstName || ""} ${customer?.lastName || ""}`,
             customerAvatar: customer?.avatar
             };
             });
             setReviewData(enrichedReviews);
            }

           fetchData();
          }, [posterImg]);

const updatedReviewData = (updatedData) =>{
                    setReviewData((prev)=>{
                    const newData = prev.map((review)=>{
                        if(review.id === updatedData.id){
                          return updatedData
                        }
                        return review
                    })
                     console.log("Updated main data:", newData);
                    return newData
                   })
                   setSelectReview(updatedData)
                    
               }

const deleteReviewData = (selectedReviewData) =>{
                      setReviewData((prev)=>{
                      const updatedData = prev.filter((reviewData)=>{
                        return reviewData.id !== selectedReviewData.id
                    })
                    return updatedData
                  })
                  setSelectReview(null)
               }

const customerFilteredReviews = useMemo(() => {
                                            if (!customerId) {
                                            return reviewData;
                                            }

                                           return reviewData.filter(
                                           (review) =>
                                            Number(review.customerId) === Number(customerId)
                                            );
                                            }, [reviewData, customerId]);

const filterProductReviewData = useMemo(() => {
                                              let data = filterReviews(
                                              customerFilteredReviews,
                                              reviewFilterValue);

                                            if (selectedProductId) {
                                             data = data.filter(
                                             (review) =>
                                              Number(review.productId) === Number(selectedProductId))}

                                              return data;
                                             }, [
                                            customerFilteredReviews,
                                            reviewFilterValue,
                                            selectedProductId]);

    const searchReviewData = useMemo(() => {
     const search = inputSearch.toLowerCase().trim();

      return filterProductReviewData.filter((review) => {
      
        return review.customerName?.toLowerCase().includes(search);

        
       });
     }, [filterProductReviewData, inputSearch]);

                     const {
                      paginatedData,
                      startIndex,
                      endIndex,
                      totalPages
                     } = useMemo(()=>{
                        return getPaginationData(searchReviewData, currentPage, rowsPerPage);
                        },[searchReviewData, currentPage, rowsPerPage])
                        
                        useEffect(() => {
                       setCurrentPage(1);
                      }, [inputSearch]);

const handleToggleFilter = useCallback((filter)=>{
                            setReviewFilters((prev)=>({
                              ...prev,
                              [filter]: !prev[filter]
                                }))
                              },[])  
                  
     const contextValue =  useMemo(()=>{
       return {
        reviewColumn,
        filterProductReviewData,
        handleToggleReviewColumn,
        handleToggleResetButton,
        paginatedData, 
        currentPage, 
        setCurrentPage, 
        rowsPerPage, 
        setRowsPerPage, 
        startIndex, 
        endIndex,
        totalPages,
        reviewData,
        selectReview,
        setSelectReview,
        updatedReviewData,
        deleteReviewData,
        reviewFilters,
        setReviewFilters,
        reviewFilterValue, 
        setReviewFilterValue,
        handleToggleFilter,
        selectedProductId,
        setSelectedProductId,
        searchReviewData,
        inputSearch,
        setInputSearch
      }
     },[reviewColumn,filterProductReviewData,handleToggleReviewColumn,handleToggleResetButton,
      ,paginatedData, currentPage, rowsPerPage, startIndex,endIndex,totalPages, handleToggleFilter, selectedProductId, setSelectedProductId,
       reviewData, selectReview,updatedReviewData,deleteReviewData, reviewFilters, reviewFilterValue, inputSearch])              

     return (<>
     <ProductReviewContext.Provider value={contextValue}>
        {children}
     </ProductReviewContext.Provider>
     </>)
    }
    
    export default ProductReviewProvider



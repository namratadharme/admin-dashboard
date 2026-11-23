
import { customerColumnDetail } from "../Data/customerColumnDetail";
import { getPaginationData } from "../Utils/pagination";
import {
  createContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
  useRef
} from "react";
import { LoadCustomerData } from "../Utils/localStorage";
import { fetchCustomerReview } from "../Services/user.services";
import { filterCustomers } from "../Utils/filterOrders";
import { useSearchParams } from "react-router-dom";


export const CustomerContext = createContext();

    const CustomerProvider = ({children}) =>{

    const [customerData, setCustomerData] = useState([])  
    const [customerColumnData, setCustomerColumnData] = useState(customerColumnDetail)
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(25);
    const [customerReview, setCustomerReview] = useState("")
    const [searchParams] = useSearchParams()
    const [customerFilterValue, setCustomerFilterValue] = useState({
      lastSeen: "",
      orders: "",
      news: "",
      segments: "",
    })

    const [toast, setToast] = useState({
        show: false,
        message: "",
      });
      
    const toastTimer = useRef(null);
    const segmentFromUrl = searchParams.get("segments")

    const filterCustomerData = useMemo(()=>{
                                return filterCustomers(customerData, customerFilterValue)
                               },[customerData, customerFilterValue])

           const {
             paginatedData,
             totalPages,
             startIndex,
             endIndex,
            } = useMemo(() => {
             return getPaginationData(
              filterCustomerData, currentPage, rowsPerPage
            );
    }, [filterCustomerData, currentPage, rowsPerPage]);

     const handleToggleCustomerData = useCallback((id)=>{
                                       setCustomerColumnData((prev)=>
                                      prev.map((item)=>{
                                      if(item.id === id){
                                        return {
                                          ...item,
                                          visible: !item.visible
                                        }
                                      }
                                       return item
                                      }))
                                      },[])  
       const handleResetCustomerData = useCallback((id)=>{
                                       setCustomerColumnData((prev)=>prev.map((item)=>{
                                        if(item.id === id){
                                          return {
                                            ...item,
                                            visible: false,
                                          }
                                        }
                                        return {
                                          ...item,
                                           visible: true,
                                        }
                                       }))
                                      }) 
                                      
                                      
        const deleteCustomer = (customerId)=>{
               setCustomerData((prev)=>
              prev.filter((item) => Number(item.id) !== Number(customerId)))
        }                              
               
     useEffect(()=>{
      async function fetchCustomerData(){
        const data = await LoadCustomerData();
        setCustomerData(data)
      }
      fetchCustomerData()
     },[]) 
       
     useEffect(()=>{
       async function fetchReview(){
         const data = await fetchCustomerReview();
       
            setCustomerReview(data)
       }
       fetchReview()
     },[])

     useEffect(() => {
         if (segmentFromUrl) {
         setCustomerFilterValue((prev) => ({
         ...prev,
         segments: segmentFromUrl,
         }));
        }
      }, [segmentFromUrl]);



const showToast = (message) => {
  setToast({
    message,
    show: true,
  });

  clearTimeout(toastTimer.current);

  toastTimer.current = setTimeout(() => {
    setToast({
      message: "",
      show: false,
    });
  }, 4000);
}; 
      const contextValue = useMemo(()=>{
        return {
        customerData, 
        customerColumnData, 
        handleToggleCustomerData, 
        handleResetCustomerData, 
        paginatedData,
        totalPages, 
        startIndex, 
        endIndex,
        currentPage,
        rowsPerPage,
        setCurrentPage,
        setRowsPerPage,
        customerFilterValue,
        setCustomerFilterValue,
        deleteCustomer,
        toast,
        showToast,
        setToast,
        }
       
      },[customerData, 
        customerColumnData, 
        handleToggleCustomerData, 
        handleResetCustomerData, 
        customerFilterValue, 
        paginatedData,
        totalPages,
        startIndex,
        endIndex,
        currentPage,
        rowsPerPage,])

    return (
        <CustomerContext.Provider value={contextValue}>
            {children}
        </CustomerContext.Provider>

    )
}

export default CustomerProvider
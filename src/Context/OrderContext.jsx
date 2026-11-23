import { createContext, useState, useEffect, useCallback, useMemo } from "react";
import { columnData } from "../Data/columnData";
import { LoadCustomerData, loadOrders} from "../Utils/localStorage";
import { getPaginationData } from "../Utils/pagination";
import { filterOrders } from "../Utils/filterOrders";
import { invoiceColumnData } from "../Data/invoiceColumnData";
import { generateItems } from "../Utils/generateItems";
import { loadPosterImage } from "../Utils/localStorage";
import { useColumnVisibility } from "../Hooks/useColumnVisibility";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const OrderContext = createContext()

  const OrderProvider = ({children}) =>{
    const [inputSearch, setInputSearch] = useState(""); 
  const [searchParams] = useSearchParams();
  const navigate = useNavigate()
  const customerId = searchParams.get("customerId");

      const [activeTab, setActiveTab] = useState("ordered")
      const [orderData, setOrderData] = useState([])
   
      const [filters, setFilters] = useState({
        customer: false,
        minAmount: false,
        passedSince: false,
        passedBefore: false,
        returned: false,
      })
      const [filterValue, setFilterValue] = useState({
        customer: "",
        minAmount: "",
        passedSince: "",
        passedBefore: "",
        returned: "",
      })
    const {column, handleToggleColumn, handleResetButton} = useColumnVisibility(columnData)

    const [invoiceColumn, setInvoiceColumn] = useState(invoiceColumnData)
    const [currentPage, setCurrentPage] = useState(1)
    const [rowsPerPage, setRowsPerPage] = useState(25)

    useEffect(() => {
  if (!customerId || !orderData.length) return;

  const customerOrder = orderData.find(
    (order) => Number(order.customerId) === Number(customerId)
  );

  if (!customerOrder) return;

  const customerName =
    `${customerOrder.firstName || ""} ${customerOrder.lastName || ""}`.trim();

  setFilters((prev) => ({
    ...prev,
    customer: true,
  }));

  setFilterValue((prev) => ({
    ...prev,
    customer: customerName,
  }));

  setCurrentPage(1);
}, [customerId, orderData]);

    const customerFilteredData = useMemo(() => {
        if (!customerId) {
        return orderData;
       }

      return orderData.filter(
      (order) => order.customerId === Number(customerId)
      );
     }, [orderData, customerId]);


    const orderCounts = useMemo(() => {
      return {
       ordered: customerFilteredData.filter(
      (order) => order.status?.toLowerCase() === "ordered"
       ).length,

      delivered: customerFilteredData.filter(
       (order) => order.status?.toLowerCase() === "delivered"
      ).length,

      cancelled: customerFilteredData.filter(
      (order) => order.status?.toLowerCase() === "cancelled"
      ).length,
     };
    }, [customerFilteredData]);

const filteredOrderData = useMemo(() => {
  const data = filterOrders(
    customerFilteredData,
    activeTab,
    filterValue
  );

  return data;
}, [customerFilteredData, activeTab, filterValue]);

                             
     const searchOrderData = useMemo(() => {
     const search = inputSearch.toLowerCase().trim();

       return filteredOrderData.filter((order) => {
       const fullName = `${order.firstName} ${order.lastName}`.toLowerCase();

        return fullName.includes(search);
       });
     }, [filteredOrderData, inputSearch]);

     const {
        paginatedData,
        startIndex,
        endIndex,
        totalPages
       } = useMemo(()=>{
        return getPaginationData(searchOrderData, currentPage, rowsPerPage);
       },[searchOrderData, currentPage, rowsPerPage])

       useEffect(() => {
         setCurrentPage(1);
         }, [inputSearch]);
  

  useEffect(() => {
    async function fetchData() {
      const data = await loadOrders();
      const posters = await loadPosterImage()
     const customers = await LoadCustomerData()
    

   const ordersWithItems = data.map((order) => {

  const customer = customers.find(
    (c) => Number(c.customerId) === Number(order.customerId)
  );

  const customerOrders = data.filter(
    (item) => Number(item.customerId) === Number(order.customerId)
  );

  const dates = customerOrders.map(
    (item) => new Date(item.date)
  );

  const firstSeen = new Date(Math.min(...dates));
  const lastSeen = new Date(Math.max(...dates));

  return {
    ...order,
    firstName: customer?.firstName || "",
    lastName: customer?.lastName || "",
    avatar: customer?.avatar || "",
    address: customer?.address || "",
    email: customer?.email || "",
    city: customer?.city || "",
    state: customer?.state || "",
    zipCode: customer?.zipCode || "",

    items: generateItems(posters),
    customerOrders,

    customerStats: {
      firstSeen: firstSeen.toLocaleDateString(),
      lastSeen: lastSeen.toLocaleDateString(),
    },
  };
},);

    setOrderData(ordersWithItems);
  }

  fetchData();
}, []);


     const handleToggleFilter = useCallback((filter)=>{
                                 setFilters((prev)=>({
                                 ...prev,
                                [filter]: !prev[filter]
                               }))
                              },[])                           
                                 
     const handleToggleInvoiceColumn = useCallback((id)=>{
                              setInvoiceColumn((prev)=>
                                  prev.map((item)=>{
                                 if(item.id === id){
                                return {
                                 ...item,
                                 visible: !item.visible
                                  }
                                }
                                 return item
                                })
                              );
                                 },[]) 

     const handleInvoiceResetButton = useCallback(()=>{
                               setInvoiceColumn((prev)=>prev.map((item)=>{
                                if(item.id === "totalExTaxes" || item.id === "deliveryFees" || item.id === "taxes"){
                                return {
                                 ...item,
                                 visible: false
                                 }
                                }
                                return {
                                 ...item,
                                 visible: true
                                 }
                                 })
                             );
                                 },[]) 


      const handleClearFilter = useCallback(() => {
                                navigate("/orders")

                                setFilters({
                                customer: false,
                                minAmount: false,
                                passedSince: false,
                                passedBefore: false,
                                returned: false,
                                });

                               setFilterValue({
                               customer: "",
                               minAmount: "",
                               passedSince: "",
                               passedBefore: "",
                               returned: "",
                             });

                            setCurrentPage(1);
                             }, [navigate, setFilters, setFilterValue, setCurrentPage]);   

   
     
      const contextValue = useMemo(()=>{
        return {activeTab, setActiveTab, filters, setFilters, 
        filterValue, setFilterValue, handleToggleFilter, column, handleToggleColumn, 
        handleResetButton, filteredOrderData, paginatedData, currentPage, setCurrentPage, 
        rowsPerPage, setRowsPerPage, startIndex, endIndex, orderData, totalPages, invoiceColumn, 
        handleInvoiceResetButton, handleToggleInvoiceColumn, orderCounts, handleClearFilter,inputSearch, setInputSearch,searchOrderData 
     }

      },[activeTab, filters, filterValue, handleToggleColumn, column, handleResetButton, filteredOrderData, paginatedData,
        currentPage, rowsPerPage, startIndex, endIndex, orderData, totalPages, handleToggleFilter, handleInvoiceResetButton,
        handleToggleInvoiceColumn, invoiceColumn, orderCounts, handleClearFilter, inputSearch,
  ])  

    return (
        <OrderContext.Provider value={contextValue}>
           {children}
        </OrderContext.Provider>
    )
}
export default OrderProvider
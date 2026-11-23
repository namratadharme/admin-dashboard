import { createContext, useState, useEffect, useMemo, useCallback} from "react";
import { getPaginationData } from "../Utils/pagination";
import { loadPosterImage } from "../Utils/localStorage";
import { categories } from "../Data/categories";

export const ProductContext = createContext();

 const ProductProvider = ({children})=>{
      const [productCurrentPage, setProductCurrentPage] = useState(1)
      const [productRowsPerPage, setProductRowsPerPage] = useState(12)
      const [selectedCategory, setSelectedCategory] = useState("all")
      const [posterImg, setPosterImg] = useState([])
      const [selectedProduct, setSelectedProduct] = useState(null)
      const [isDirty, setIsDirty] = useState(false)
      const [category, setCategory] = useState(categories)
      const [selectedCategoryProduct, setSelectedCategoryProduct] = useState([])
        const [input, setInput] = useState("")



const filteredProduct = useMemo(() => {
    return posterImg.filter((item) => {
        const matchCategory =
            selectedCategory === "all" ||
            item.category.toLowerCase() === selectedCategory.toLowerCase();

        const matchSearch =
            item.category.toLowerCase().includes(input.toLowerCase());

        return matchCategory && matchSearch;
    });
}, [posterImg, selectedCategory, input]);
    
    
    const handleSelectedProduct = useCallback((productId)=>{
                                         setSelectedCategoryProduct((prev)=>{
                                           return prev.includes(productId)
                                            ? prev.filter((id)=>id !== productId)
                                            : [...prev, productId]
                                          })
                                        },[])
    const handleDeleteSelectedProduct = () =>{
                                          setPosterImg((prev)=>{
                                            return prev.filter((item)=> !selectedCategoryProduct.includes(item.id))
                                           })
                                           setSelectedCategoryProduct([])
                                         }                                    


   useEffect(()=>{
    async function fetchPosterImageData(){
      const data = await loadPosterImage();

      const updatedData = data.map((item, index)=>({
        ...item,
        reference: item.alt.split(" ").slice(0, 3).join(" "),
        price: Math.floor(Math.random() * 100) + 20,
        stock: Math.floor(Math.random() * 100) + 10,
        sales: Math.floor(Math.random() * 1000) + 20,
      }))
    
         setPosterImg(updatedData) 
    }
    fetchPosterImageData();
   },[])


 const {
  paginatedData: paginatedProductData,
  startIndex: productStartIndex,
  endIndex: productEndIndex,
  totalPages: productTotalPages,
} = useMemo(()=>{
  return getPaginationData(
  filteredProduct,
  productCurrentPage,
  productRowsPerPage
)},[filteredProduct, productCurrentPage, productRowsPerPage]
);

const handleDeleteCategory = (categoryTitle) =>{
    setCategory((prev)=>
    prev.filter((item)=>item.title.toLowerCase() !== categoryTitle.toLowerCase()))
}

const contextValue = useMemo(()=>{
  return{
        category,
        handleDeleteCategory,
        paginatedProductData,
        productStartIndex, 
        productEndIndex, 
        productTotalPages,
        productCurrentPage,
        setProductCurrentPage,
        productRowsPerPage,
        setProductRowsPerPage,
        filteredProduct,
        selectedCategory,
        setSelectedCategory,
        posterImg,
        setPosterImg,
        selectedProduct,
        setSelectedProduct,
        isDirty,
        setIsDirty,
        handleSelectedProduct,
        handleDeleteSelectedProduct,
        selectedCategoryProduct,
        setSelectedCategoryProduct,
        input,
        setInput
  }
},[paginatedProductData,
   productStartIndex,
   productEndIndex,
   productCurrentPage,
   productRowsPerPage,
   filteredProduct,
   selectedCategory,
   posterImg,
   selectedProduct,
   isDirty,
   handleDeleteCategory,
   category
])

    return (
        <ProductContext.Provider 
        value={contextValue}>
        {children}
        </ProductContext.Provider>
    )
    
 }
 export default ProductProvider
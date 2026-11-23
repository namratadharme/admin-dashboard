import React, { lazy, Suspense } from "react";

const Registration = lazy(() => import("./Pages/Auth/RegistrationPage"));
const Login = lazy(() => import("./Pages/Auth/LoginPage"));
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./Routes/ProtectedRoute";
const Dashboard = lazy(() => import("./Pages/Dashboard/Dashboard"));
import UserProfileProvider from "./Context/ProfileContext";
const OrdersPage = lazy(() => import("./Pages/Orders/OrdersPage"));
import LayoutProvider from "./Context/LayoutContext";
import Layout from "./Components/Layout/Layout";
import OrderProvider from "./Context/OrderContext";
const OrderDetailsPage = lazy(() => import("./Pages/Orders/OrderDetailsPage"));
const IdentityPage = lazy(() => import("./Pages/Orders/IdentityPage"));
const CategoriesPage = lazy(() => import("./Pages/Categories/CategoriesPage"));
const ProductsPage = lazy(() => import("./Pages/Posters/ProductsPage"));
import ProductProvider from "./Context/ProductContext";
const ProductDetailsPage = lazy(() => import("./Pages/Posters/ProductDetailsPage"));
const ProductOverview = lazy(() => import("./Components/ProductDetails/ProductOverview"));
const ProductDetails = lazy(() => import("./Components/ProductDetails/ProductDetails"));
const ProductDescription = lazy(() => import("./Components/ProductDetails/ProductDescription"));
const InvoicesPage = lazy(() => import("./Pages/Invoices/InvoicesPage"));
const SegmentsPage = lazy(() => import("./Pages/Segment/SegmentsPage"));
const CustomersPage = lazy(() => import("./Pages/Customers/CustomersPage"));
import CustomerProvider from "./Context/CustomerContext";
const ProductReviewPage = lazy(() => import("./Pages/Review/ProductReviewPage"));
import ProductReviewProvider from "./Context/ReviewContext";
const CategoryEditPage = lazy(() => import("./Pages/Categories/CategoryEditPage"));
import { ThemeProvider } from "./Context/ThemeContext";
import Loader from "./ReusableComponent/Loader";

function App(){

  return (<>
  <ThemeProvider>
  <UserProfileProvider>
    <LayoutProvider>
      <OrderProvider>
        <ProductProvider>
          <CustomerProvider>
            <ProductReviewProvider>
              <Suspense fallback={<Loader />}>
     <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/registration" element={<Registration/>}/>

     <Route element={<ProtectedRoute><Layout/></ProtectedRoute>}>
     <Route path="/dashboard" element={  <Dashboard/> }/>
     <Route path="/orders" element={  <OrdersPage/> }/>
     <Route path="/orders/:id" element={<OrderDetailsPage/>}/>
     <Route path="/identity/:id" element={<IdentityPage />} />
     <Route path="/categories" element={<CategoriesPage/>}/>
    <Route path="/categories/:category/edit"element={<CategoryEditPage />}/>
     <Route path="/products" element={<ProductsPage/>}/>

     <Route path="/products/:id" element={<ProductDetailsPage/>}>

          <Route index element={<ProductOverview/>}/>
          <Route path="details" element={<ProductDetails/>}/>
          <Route path="description" element={<ProductDescription/>}/>
          <Route path="review" element={<ProductReviewPage/>}/>
        

     </Route>
      <Route path="/invoices" element={<InvoicesPage/>}/>
      <Route path="/segment" element={<SegmentsPage/>}/>
      <Route path="/customers" element={<CustomersPage/>}/>
      <Route path="/review" element={<ProductReviewPage/>}/>
      <Route path="/review/:id" element={<ProductReviewPage/>}/>
     </Route>
       
    </Routes>
    </Suspense>
      </ProductReviewProvider>
    </CustomerProvider>
    </ProductProvider>
  </OrderProvider>
 </LayoutProvider>
</UserProfileProvider>
 </ThemeProvider>

  </>)
}
export default App
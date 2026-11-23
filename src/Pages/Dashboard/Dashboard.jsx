import { useContext } from "react";
import "../../Styles/dashboard.scss";
import "../../Styles/common.scss";
import WelcomeBanner from "../../Components/Dashboard/WelcomeBanner";
import StatsSection from "../../Components/Dashboard/StatsSection";
import { LayoutContext } from "../../Context/LayoutContext";
import PendingReviews from "../../Components/Dashboard/PendingReviews";
import NewCustomers from "../../Components/Dashboard/NewCustomer";
import PendingOrder from "../../Components/Dashboard/PendingOrder";
import { lazy, Suspense } from "react";

const DashboardGraph = lazy(() => import("./DashboardGraph"));

function Dashboard(){
  const {isSideBarOpen} = useContext(LayoutContext)

    return(<>
         <div className={`main-content ${isSideBarOpen ? "open" : "close"}`}>
           <WelcomeBanner/>
        <div className="bottom-content">
          <div className="bottom-left-content">
              <StatsSection/>
             <Suspense fallback={<div>Loading chart...</div>}>
                 <DashboardGraph />
             </Suspense>
              <PendingOrder/>
          </div>
         <div className="bottom-right-content">
               <PendingReviews/>
               <NewCustomers/>
         </div>
        </div>
        </div>

    </>)
}

export default Dashboard
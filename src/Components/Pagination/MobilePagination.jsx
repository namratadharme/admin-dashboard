import { useContext } from "react";
import { OrderContext } from "../../Context/OrderContext";
import "../../Styles/pagination.scss";

function MobilePagination(){

    const {
        filteredOrderData,
        currentPage,
        setCurrentPage,
        rowsPerPage
    } = useContext(OrderContext)


    const totalPages = Math.ceil(
        filteredOrderData.length / rowsPerPage
    )
    const startRow =
        ((currentPage - 1) * rowsPerPage) + 1


    const endRow = Math.min(
        currentPage * rowsPerPage,
        filteredOrderData.length
    )

    function handlePreviousPage(){

        if(currentPage > 1){
            setCurrentPage(currentPage - 1)
        }
    }
    function handleNextPage(){

        if(currentPage < totalPages){
            setCurrentPage(currentPage + 1)
        }

    }
    return(
        <>
        
        <div className="mobile-pagination">
            <span>
                {startRow}-{endRow} of {filteredOrderData.length}
            </span>
            <div className="pagination-btn">
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                >
                    {"<"}
                </button>

                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                >
                    {">"}
                </button>

            </div>
        </div>

        </>
    )
}

export default MobilePagination
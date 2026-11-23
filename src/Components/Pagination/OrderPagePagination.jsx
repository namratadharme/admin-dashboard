import React, { useContext } from "react";
import { OrderContext } from "../../Context/OrderContext";
import { useNavigate, useParams } from "react-router-dom";
import "../../Styles/pagination.scss";

function OrderPagePagination() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { filteredOrderData } = useContext(OrderContext);


  const currentOrderIndex = filteredOrderData.findIndex(
    (item) => String(item.id) === String(id)
  );

  const isValidIndex = currentOrderIndex !== -1;
  const isFirst = currentOrderIndex <= 0;
  const isLast =
    currentOrderIndex >= filteredOrderData.length - 1 ||
    !isValidIndex;


  function handleNextPage() {
    if (!isValidIndex) return;

    if (currentOrderIndex < filteredOrderData.length - 1) {
      navigate(
        `/orders/${filteredOrderData[currentOrderIndex + 1].id}`
      );
    }
  }


  function handlePrevPage() {
    if (!isValidIndex) return;

    if (currentOrderIndex > 0) {
      navigate(
        `/orders/${filteredOrderData[currentOrderIndex - 1].id}`
      );
    }
  }

  return (
    <div className="pagination">
     
      <button
        className="pagination-btn"
        disabled={isFirst}
        onClick={handlePrevPage}
      >
        &#8249;
      </button>

      <span className="pagination-text">
        {isValidIndex ? currentOrderIndex + 1 : 0} /{" "}
        {filteredOrderData.length}
      </span>

   
      <button
        className="pagination-btn"
        disabled={isLast}
        onClick={handleNextPage}
      >
        &#8250;
      </button>
    </div>
  );
}

export default OrderPagePagination;
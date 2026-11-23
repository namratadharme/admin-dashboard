import "../../Styles/pagination.scss";

function Pagination({
    filteredData =[], 
    rowsPerPage, 
    currentPage, 
    setCurrentPage, 
    setRowsPerPage, 
    startIndex, 
    endIndex, 
    totalPages} )
    {

    const getPageNumbers = () => {
    const pages = [];
    for (
        let i = 1;
        i <= Math.min(5, totalPages);
        i++
    ) {
        pages.push(i);
    }
    if (totalPages > 5) {
        pages.push("...");
    }
    if (totalPages > 5) {
        pages.push(totalPages);
    }
    return pages;
};
  
    return(<>
       <div className="pagination">
        <div className="blank"></div>
        <div className="pagination-right">
        <div className="rows-per-page">
            <span>Rows per page</span>
               <select value={rowsPerPage} onChange={(e)=>{
                setRowsPerPage(Number(e.target.value))
                setCurrentPage(1)}}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
               </select>
        </div>
        <div className="page-detail">
            <div className="total-page">{startIndex + 1}-{Math.min(endIndex, filteredData.length)} of {filteredData.length}</div>

            <div className="page-buttons">
                <button className="btn arrow" disabled={currentPage === 1} onClick={()=>setCurrentPage(currentPage-1)}>{"<"}</button>
             {
               getPageNumbers().map((page, index) => (
              <button key={index} disabled={page === "..."} className={`btn ${currentPage === page ? "active" : ""}`}
              onClick={() => page !== "..." && setCurrentPage(page)}>
              {page}
             </button>))}
                <button className="btn-arrow" disabled={currentPage === totalPages} onClick={()=>setCurrentPage(currentPage + 1)}>{">"}</button>
            </div>
        </div>
        </div>
       </div>
    </>)
}

export default Pagination
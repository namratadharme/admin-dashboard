export function getPaginationData(data, currentPage, rowsPerPage){

   const startIndex = (currentPage - 1) * rowsPerPage;

   const endIndex = startIndex + rowsPerPage;

   const paginatedData = data.slice(startIndex, endIndex);

   const totalPages = Math.ceil(data.length / rowsPerPage);

   return {
      startIndex,
      endIndex,
      paginatedData,
      totalPages
   };
}
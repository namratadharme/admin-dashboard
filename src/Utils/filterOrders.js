export function filterOrders(orderData, activeTab, filterValue) {
  return orderData.filter((item) => {
    const itemDate = new Date(item.date);

    const customerName =
      `${item.firstName || ""} ${item.lastName || ""}`.trim();

    return (
      item.status?.toLowerCase() === activeTab &&

      customerName
        .toLowerCase()
        .includes((filterValue.customer || "").toLowerCase()) &&

      item.total >= Number(filterValue.minAmount || 0) &&

      (
        !filterValue.passedSince ||
        itemDate >= new Date(filterValue.passedSince)
      ) &&

      (
        !filterValue.passedBefore ||
        itemDate <= new Date(filterValue.passedBefore)
      )
    );
  });
}
export function filterReviews(reviewData = [], filterValue) {
  return reviewData.filter((item) => {
    const itemDate = new Date(item.date);

    return (
      (!filterValue.status ||
        item.status?.toLowerCase() ===
          filterValue.status.toLowerCase()) &&

      (item.customer || "")
        .toLowerCase()
        .includes((filterValue.customer || "").toLowerCase()) &&

      (item.product || "")
        .toLowerCase()
        .includes((filterValue.product || "").toLowerCase()) &&

      (!filterValue.postedSince ||
        itemDate >= new Date(filterValue.postedSince)) &&

      (!filterValue.postedBefore ||
        itemDate <= new Date(filterValue.postedBefore))
    );
  });
}
export function filterCustomers(customerData = [], filterValue) {
  return customerData.filter((item) => {
    if (filterValue.orders) {
      if (
        filterValue.orders === "Yes" &&
        item.orders === 0
      ) {
        return false;
      }
      if (
        filterValue.orders === "No" &&
        item.orders > 0
      ) {
        return false;
      }
    }
    if (filterValue.news) {
      if (
        filterValue.news === "Yes" &&
        item.news !== true
      ) {
        return false;
      }

      if (
        filterValue.news === "No" &&
        item.news !== false
      ) {
        return false;
      }
    }
    if (filterValue.segments) {
      if (
        item.segments?.toLowerCase() !==
        filterValue.segments.toLowerCase()
      ) {
        return false;
      }
    }
    return true;
  });
}


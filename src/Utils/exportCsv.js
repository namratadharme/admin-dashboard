export function handleExport(filteredData){

     const header = [
        "Date",
        "Reference",
        "Customer",
        "Address",
        "NB Item",
        "Total",
        "Delivery Fees",
        "Taxes",
        "Total Ex Taxes"
     ]
     if(!filteredData.length)return

    const rows = filteredData.map((item)=>[
        item.date,
        item.refrence,
        item.customer,
        item.address,
        item.nbItems,
        item.total

    ])

    const csvContent = [
        header.join(","),
        ...rows.map((row)=>row.join(","))
    ].join("\n")

    const blob =new Blob(
        [csvContent],
        {type: "text/csv"}
    )
    const url = window.URL.createObjectURL(blob)

    const link = document.createElement("a")

    link.href = url
    link.download = "orders.csv"
    link.click()
}
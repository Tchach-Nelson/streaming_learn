import { useState } from "react";
import "./products.scss"
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { GridColDef } from "@mui/x-data-grid";
import { productsRows } from "../../data";

const columns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'ID',
        width: 50,
        type: 'number',
    },
    {
        field: "img",
        headerName: "Image",
        width: 100,
        renderCell: (params) => {
            return <img src={params.row.img} alt="" />
        }
    },
    {
        field: 'title',
        headerName: 'Title',
        width: 200,
        type: 'string',
    },
    {
        field: 'color',
        headerName: 'Color',
        width: 120,
        type: 'string',
    },
    {
        field: "price",
        headerName: "Price",
        type: 'string',
        width: 120
    },
    {
        field: "producer",
        headerName: "Producer",
        type: 'string',
        width: 120
    },
    {
        field: 'createdAt',
        headerName: 'created At',
        type: 'string',
        width: 120,
    },
    {
        field: 'instock',
        headerName: 'In stock',
        type: 'boolean',
        width: 120,
    }
];


function Products() {
    const [open, setOpen] = useState(false)

    return (
        <div className="products">
            <div className="info">
                <h1>Product</h1>
                <button onClick={() => { setOpen(true) }}>Add New Product</button>
            </div>
            <DataTable slug="products" columns={columns} rows={productsRows} />
            {open && <Add slug="products" columns={columns} setOpen={setOpen} />}
        </div>
    )
}

export default Products;
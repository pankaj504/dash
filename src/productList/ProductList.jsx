import React,{useState} from 'react'
import './productList.css'
import { DataGrid } from '@mui/x-data-grid'
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import { productRows } from "../demoData.js";
const ProductList = () => {
  const[data,setData]=useState(productRows)
  const handleClick = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 280 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/products/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="productListDelete"
              onClick={() => handleClick(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className='productList'>
     <DataGrid
        rows={data}
        disableRowSelectionOnClick
        columns={columns}
        pageSize={4}
        pageSizeOptions={[5, 8]}
        checkboxSelection
      />
    </div>
  )
}

export default ProductList

import React, { useState } from "react";
import "./userlist.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
// import { Link } from "react-router-dom";
import { userRows } from "../../demoData.js";
import { Link } from "react-router-dom";
const UserList = () => {
  const [data, setData] = useState(userRows);
  const handleClick = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "userName",
      headerName: "Username",
      width: 180,
      editable: false,
      renderCell: (params) => {
        return (
          <div className="userList">
            <img src={params.row.avatar} alt="" className="usrlistImg" />

            {params.row.userName}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 220,
      editable: false,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 120,
      editable: false,
    },
    {
      field: "status",
      headerName: "Status",
      sortable: false,
      width: 100,
    },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      width: 90,
      renderCell: (params) => {
        return (
          <div className="userListBtn">
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit </button>
            </Link>
            <DeleteOutline
              className="usrBtn"
              onClick={() => handleClick(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 4,
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default UserList;

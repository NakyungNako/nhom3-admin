import "./userList.css";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { userRows } from "../../tempData";
import React from "react";
import { EditOutlined, Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

export default function UserList() {
  const [data, setData] = React.useState(userRows || []);

  function handleDelete(id) {
    setData(data.filter((item) => item.id !== id));
  }

  const [test, setTest] = React.useState();

  function handleSelection(selection) {
    setTest(selection.data);
  }

  function handleSelectionDelete() {
    console.log(test);
  }
  // React.useEffect(() => {
  //   localStorage.setItem("users", JSON.stringify(data))
  // }, [data])

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "username",
      headerName: "Username",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="user-listUsername">
            <img className="user-listImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 169 },
    {
      field: "status",
      headerName: "Status",
      width: 90,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 90,
    },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="hover-view">
            <Link
              to={{
                pathname: `/user/${params.row.id}`,
              }}
            >
              <IconButton color="info">
                <EditOutlined />
              </IconButton>
            </Link>
            <IconButton
              color="error"
              aria-label="delete"
              onClick={() => handleDelete(params.row.id)}
            >
              <Delete />
            </IconButton>
          </div>
        );
      },
    },
  ];

  return (
    <div className="user-list">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        onSelectionChange={handleSelection}
      />
    </div>
  );
}

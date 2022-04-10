import "./productList.css"
import { 
    DataGrid, 
    GridColDef } from '@mui/x-data-grid';
// import { productRows } from "../../tempData";
import React from 'react';
import { Done, Close } from '@mui/icons-material';
import { IconButton, Button } from '@mui/material';
import { Link } from "react-router-dom";
import productApi from '../../api/productApi';

export default function ProductList() {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
      const fetchProductList = async () => {
        try {
  
          const response = await productApi.getAll();
          setData(response);
          

        } catch (error) {
          console.log('Failed to fetch product list: ', error);
        }
      }
  
      fetchProductList();
      
    }, [data]);


    const handleDenied = (id) => {
      try {
        productApi.put(id, { isVerified: 'true' }) 
      } catch (error) {
        console.log('Failed to update product')
      }
      setData(data.filter((item) => item.id !== id));
    };

    const handleAccept = (id) => {
      try {
        productApi.put(id, { isVerified: 'true', isPublished: 'true' }) 
      } catch (error) {
        console.log('Failed to update product')
      }
      setData(data.filter((item) => item.id !== id));
    };

    const columns: GridColDef[] = [
      { field: '_id', headerName: 'ID', width: 300 },
      {
        field: "product",
        headerName: "Product",
        width: 300,
        renderCell: (params) => {
          return (
            <div className="prod-listItem">
              <img className="prod-listImg" src={params.row.img} alt="" />
              {params.row.title}
            </div>
          );
        },
      },
      { field: 'owner', headerName: 'Owner', width: 169 },
      {
        field: 'stock',
        headerName: 'Quantity',
        width: 150,
      },
      {
        field: 'price',
        headerName: 'Price',
        width: 90,
      },
      {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
          return (
            <>
              <Link to={`/product/${params.row._id}`}>
                <Button className="prod-listBtn" size="small">
                  Detail
                </Button>
              </Link>
              <IconButton color="success"
                aria-label="delete" 
                onClick={() => handleAccept(params.row._id)}
              >
                <Done />
              </IconButton>
              <IconButton 
                color="error" 
                aria-label="delete" 
                onClick={() => handleDenied(params.row._id)}
              >
                <Close />
              </IconButton>
            </>
          );
        },
      },
    ];

    
  return (
    <div className='prodList'>
        <DataGrid
        getRowId={(row) => row._id}
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  )
}

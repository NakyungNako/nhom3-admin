import "./product.css"
import Button from '@mui/material/Button';
import {Done, Close} from '@mui/icons-material';
import { useParams, useNavigate } from 'react-router-dom'
import React from "react"
// import { productRows } from "../../tempData";
import productApi from '../../api/productApi';

export default function Product() {
    const navigate = useNavigate();
    const { productId } = useParams();

    async function handleAccept() {
        try {
            await productApi.put(productId, { isVerified: 'true', isPublished: 'true' }) 
        } catch (error) {
            console.log('Failed to update product')
        }
        return navigate(-1)
    }

    async function handleDenied() {
        try {
            await productApi.put(productId, { isVerified: 'true' }) 
        } catch (error) {
            console.log('Failed to update product')
        }
        return navigate(-1)
    }
    
    const [prod, setProd] = React.useState({
        title: "",
        _id: "",
        price: "",
        color: "",
        owner: "",
        origin: "",
        desc: "",
        img: ""
    })

    React.useEffect(() => {
        const fetchProduct = async () => {
            try {
      
              const response = await productApi.get(productId);
              setProd(response);
              
            } catch (error) {
              console.log('Failed to fetch product list: ', error);
            }
        }
      
        fetchProduct();
    }, [])

    console.log(prod);
  return (
    <div className="product">
        <h1 className="product-title">Product Preview</h1>
        <div className="product-container">
            <div className="product-intro">
                <img src={prod.img}
                    alt=""
                    className="product-img"
                />
                <div className="product-name">{prod.title}</div>
                <div className="product-owner">{prod.owner}</div>
            </div>
            <div className="product-info">
                <span className="productInfo-title">Information</span>
                <div className="productInfo-full">
                    <div className="productInfo-detail">
                        <div className="productInfo-line">
                            <div className="productInfo-value">Product Name: </div>
                            <span className="productInfo-src">{prod.title}</span>
                        </div>
                        <div className="productInfo-line">
                            <div className="productInfo-value">ID: </div>
                            <span className="productInfo-src">{prod._id}</span>
                        </div>
                        <div className="productInfo-line">
                            <div className="productInfo-value">Price: </div>
                            <span className="productInfo-src">${prod.price}</span>
                        </div>
                        <div className="productInfo-line">
                            <div className="productInfo-value">Color: </div>
                            <span className="productInfo-src">{prod.color}</span>
                        </div>
                        <div className="productInfo-line">
                            <div className="productInfo-value">Owner: </div>
                            <span className="productInfo-src">{prod.owner}</span>
                        </div>
                        <div className="productInfo-line">
                            <div className="productInfo-value">Origin: </div>
                            <span className="productInfo-src">{prod.origin}</span>
                        </div>
                        <div className="productInfo-line">
                            <div className="productInfo-value">Description: </div>
                            <span className="productInfo-src">{prod.desc}</span>
                        </div>
                    </div>
                    <div className="productInfo-releaseBtns">
                        <Button variant="outlined" color="success" startIcon={<Done />} className="product-acceptBtn" onClick={handleAccept}>Accept</Button>
                        <Button variant="outlined" color="warning" startIcon={<Close />} className="product-deniedBtn" onClick={handleDenied}>Denied</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

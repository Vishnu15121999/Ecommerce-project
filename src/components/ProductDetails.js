import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {selectedProduct} from '../redux/actions/products-actions';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { addProductToCart } from '../redux/actions/cart-actions';

const ProductDetails = () => {
    const dispatch=useDispatch();
    const {productId}=useParams();
    const product=useSelector((state)=>state.selectedProduct);
    const {title,images,price,description}=product;
    //console.log(product);

    const fetchSeletecProduct=async()=>{
        const res=await axios.get(`https://api.escuelajs.co/api/v1/products/${productId}`).catch((err)=>console.log(err));
        dispatch(selectedProduct(res.data));
    }

    useEffect(()=>{
        if(productId && productId !=="") fetchSeletecProduct();
    },[productId]);

    const addProductToCart2=(material)=>{
        dispatch(addProductToCart(material))
    }

  return (
    <div className='details-container'>
        <div className='details-container-image'>
            {/**<img src={images[0]}/>**/}
        </div>
        <div className='details-container-content'>
            <h3>{title}</h3>
            <hr/>
            <p>{description}</p>  
            <p>{price}</p>
            <button className='cart-btn' onClick={()=>addProductToCart2(product)}>Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductDetails
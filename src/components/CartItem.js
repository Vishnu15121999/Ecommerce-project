import React, { useEffect, useState } from 'react'

const CartItem = ({id,title,price,category,onItemRemove,images,quantity,onQuantityChange}) => {
    const [data,setData]=useState([]);

    useEffect(()=>{
        const data=JSON.parse(localStorage.getItem('data'))
        if(data){
            setData(data);
        }
    },[]);
    //console.log(data.address);

  return (
    <div className='cart-container' key={id}>
        <div>
            <img className='cart-image' src={images[0]} alt='#'/>
        </div>
        <div className='cart-details'>
            <h3 style={{margin:'10px'}}>{title}</h3>
            <hr/>
            <p>Single Product Price : ${price}</p>
            <input type='number' defaultValue={quantity} 
            onChange={e=>onQuantityChange(Number(e.target.value))} onKeyUp={e=>{
                if(e.keyCode === 13){
                    onQuantityChange(Number(e.target.value))
                }
            }}/>
            <p>{category.name}</p>
            <span>Total Price : ${quantity*price}</span>
            <button className='remove-btn' onClick={onItemRemove}>Remove</button>
        </div>
        <div className='cart-address'>
            <p>Delivery Address : {data.address}</p>
        </div>
    </div>
  )
}

export default CartItem
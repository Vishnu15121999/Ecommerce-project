import React, { useEffect, useState } from 'react'
import { Link, json } from 'react-router-dom';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import PersonIcon from '@mui/icons-material/Person';

const Header = () => {
  const [name,setName]=useState([]);

  useEffect(()=>{
    const data=JSON.parse(localStorage.getItem('data'));
    if(data){
      setName(data);
    }
  },[]);

  return (
    <div>
        <nav className='header-nav'>
            <h2><Link style={{textDecoration:'none' , color:'black'}} to='/'>SnapDeal</Link></h2>
            <ul className='header-list'>
                <li><Link style={{textDecoration:'none' , color:'black' , display:'flex' , alignItems:'center'}} to="/products"><ShoppingBasketIcon sx={{marginRight:0.3 }}></ShoppingBasketIcon><h4>Products</h4></Link></li>
                <li><Link style={{textDecoration:'none' , color:'black' , display:'flex' , alignItems:'center'}} to="/cart"><ShoppingCartIcon></ShoppingCartIcon><h4>Cart</h4></Link></li>
                <li><Link style={{textDecoration:'none' , color:'black' , display:'flex' , alignItems:'center'}} to="/about"><InfoIcon></InfoIcon><h4>About</h4></Link></li>
                <li><Link style={{textDecoration:'none' , color:'black' , display:'flex' , alignItems:'center'}} to='/user'><PersonIcon></PersonIcon><h4>{name.name}</h4></Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header
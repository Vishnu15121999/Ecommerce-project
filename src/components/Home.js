import React from 'react';
import {useNavigate} from 'react-router-dom';
import StoreIcon from '@mui/icons-material/Store';

const Home = () => {
  const navigate=useNavigate();

  return (
    <div className='home-container'>
        <div className='home-card'>
            <h1>Welcome to SnapDeal.<br></br>We are having 15% sale across all the products.</h1>
            <button onClick={()=>navigate('/products')}><StoreIcon sx={{marginRight:1}}></StoreIcon>Explore</button>
        </div>
    </div>
  )
}

export default Home
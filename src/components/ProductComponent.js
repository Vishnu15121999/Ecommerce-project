import React from 'react'
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  //console.log(products);

  const renderList = products.map(product => {
    const { id, title, images, price, category } = product;
    return (
      <div key={id} className='card'><Link style={{textDecoration:'none', color:'black'}} to={`/products/${id}`}>
        <div className='card-head'>
          <img className='card-image' src={images[0]} alt={title} />
        </div>
        <hr style={{margin:'0px 10px'}}/>
        <div className='card-details'>
          <h3>{title}</h3>
          <span style={{fontWeight:'bold'}}>${price}</span>
          <p>{category.name}</p>
        </div>
        </Link>
      </div>
    )
  })
  return (
    <>{renderList}</>
  )
}

export default ProductComponent
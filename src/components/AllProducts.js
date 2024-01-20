import React, { useEffect } from 'react';
import axios from 'axios';
import { setProduct } from '../redux/actions/products-actions';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import { selectFilter, selectedFilter , removeFilter} from '../redux/actions/products-actions';
import FilterProductComponent from './FilterProductComponent';

const AllProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);
  const department = useSelector((state) => state.allProducts.department);
  const filterData = useSelector((state) => state.allProducts.filterData);
  //console.log(filterData);

  const fetchFilters = async () => {
    const filters = await axios.get(`https://api.escuelajs.co/api/v1/categories`).catch((err) => console.log(err));
    dispatch(selectFilter(filters.data));
  }

  const fetchProducts = async () => {
    const res = await axios.get(`https://api.escuelajs.co/api/v1/products`).catch((err) => console.log(err));
    dispatch(setProduct(res.data));
  }

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line
  }, []);

  useEffect(()=>{
    fetchFilters();
    // eslint-disable-next-line
  },[]);

  const onClearFunction=()=>{
    dispatch(removeFilter());
  }

  return (
    <div>
      <div className='department-container'>
        <button className='filter-button' onClick={onClearFunction}>All</button>
        {
          department && department.map((category) => {
            const { id, name } = category;
            return (
              <button className='filter-button' onClick={() => dispatch(selectedFilter({ id, name }))} key={id}>{name}</button>
            )
          })
        }
      </div>
      <hr/>
      <div className='container'>
        {filterData && filterData.length <= 0 ? products.map(product=>(
          <ProductComponent key={product.id} {...product}/>
        )) :filterData && filterData.map((item)=>(
          <FilterProductComponent/>
        ))}
      </div>
    </div>
  )
}

export default AllProducts

//products && products.map((product) => (
//<ProductComponent key={product.id} {...product} 
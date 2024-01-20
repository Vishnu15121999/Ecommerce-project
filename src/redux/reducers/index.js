import {combineReducers} from 'redux';
import {productReducers, selectedProductReducer} from './product-reducers';
import { handleCart } from './cart-reducers';

const reducers=combineReducers({
    allProducts:productReducers,
    selectedProduct:selectedProductReducer,
    cart:handleCart
})

export default reducers;
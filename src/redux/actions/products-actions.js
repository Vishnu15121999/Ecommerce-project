import {ActionTypes} from '../constants/action-types';

export const setProduct=(products)=>{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:products
    }
}

export const selectedProduct=(product)=>{
    return{
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product
    }
}

export const selectFilter=(department)=>{
    return{
        type:ActionTypes.SET_FILTER,
        payload:department
    }
}

export const selectedFilter=(data)=>{
    return{
        type:ActionTypes.SELECTED_FILTER,
        payload:data //(id,name)
    }
}

export const removeFilter=()=>{
    return{
        type:ActionTypes.CLEAR_FILTER,
    }
}
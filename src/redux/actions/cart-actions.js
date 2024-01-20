import {ActionTypes} from '../constants/action-types';

export const addProductToCart=(product)=>{
    return{
        type:ActionTypes.ADD_PRODUCT,
        payload:product
    }
}

export const removeProductCart=(id)=>{
    return{
        type:ActionTypes.REMOVE_PRODUCT,
        id
    }
}

export const setQuantity=(id,qty)=>{
    return{
        type:ActionTypes.SET_QUANTITY,
        id,qty
    }
}

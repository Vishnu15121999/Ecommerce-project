import { ActionTypes } from "../constants/action-types"

const initialState = {
    products: [],
    department:[],
    filterData:[]
}

export const productReducers = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {
                ...state,
                products: payload
            }
        case ActionTypes.SET_FILTER:
            return{
                ...state,
                department:payload
            }
        case ActionTypes.SELECTED_FILTER:
            //console.log(payload);
            const products=state.products;
            const {name}=payload;
            let x=[];
            x=products.filter((item)=>item.category.name === name);
            console.log(x);
            return{
                ...state,
                filterData:x
            }
        case ActionTypes.CLEAR_FILTER:
            return {
                ...state,
                filterData:state.products
            }
        default:
            return state;
    }
}

export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}

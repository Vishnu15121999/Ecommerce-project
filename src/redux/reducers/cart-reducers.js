import { ActionTypes } from "../constants/action-types";

const initialState = {
    totalCost: 0,
    totalProducts: 0,
    items: []
}

export const handleCart = (state = initialState, action) => {
    //console.log(action.payload);
    const product = action.payload;
    switch (action.type) {
        case ActionTypes.ADD_PRODUCT: {
            return state.items.find((item) => item.id === product.id) ?
                {
                    totalProducts: state.totalProducts + 1,
                    totalCost: state.totalCost + product.price,
                    items: state.items.map((item) => {
                        if (item.id === product.id) {
                            return {
                                ...item,
                                qty: item.qty + 1
                            }
                        }
                        return item
                    })
                } : {
                    totalProducts: state.totalProducts + 1,
                    totalCost: state.totalCost + product.price,
                    items: [...state.items, { ...product, qty: 1 }]
                }
        }
        case ActionTypes.REMOVE_PRODUCT: {
            let findItem = state.items.find((item) => item.id === action.id)
            if (findItem) {
                let totalCostofItem = findItem.price * findItem.qty;
                return {
                    totalCost: state.totalCost - totalCostofItem,
                    totalProducts: state.product - findItem.qty,
                    items: state.items.filter(item => item.id !== action.id)
                }
            }
            else {
                return state;
            }
        }
        case ActionTypes.SET_QUANTITY:
            let revisedQuantity = state.items.map((item) => {
                if (item.id === action.id) {
                    return {
                        ...item,
                        qty: action.qty
                    }
                }
                return item;
            });
            let reviseTotalQuantity = revisedQuantity.reduce((prev, curr) => prev + curr, 0);
            let reviseTotalCost = revisedQuantity.reduce((prev, curr) => prev + curr.qty * curr.price, 0);
            return {
                totalProducts: reviseTotalQuantity,
                totalCost: reviseTotalCost,
                items: revisedQuantity
            }
        default: {
            return state;
        }
    }
}
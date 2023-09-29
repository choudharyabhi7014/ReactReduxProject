import { combineReducers } from "redux";


const initialState = {
    cartItems: []
};
export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AddToCart':
            return { ...state, cartItems: [...state.cartItems, action.payload] };
        case 'RemoveCart':
            return { ...state, cartItems: state.cartItems.filter(item => item.id !== action.payload) }
        default: return state
    }
}
export const combine = combineReducers({ cartReducer })
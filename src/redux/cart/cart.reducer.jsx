import { ToggleCartHidden } from "./cart.actions";
import { CartActionType } from "./cart.types";
import { addItemTocart } from "./cart.utils";

const INITIAL_STATE = {
    hidden:true,
    cartItem: []
};
const CartReducer =(state=INITIAL_STATE, action)=>{

    switch(action.type){
        case CartActionType.TOGGLE_CART_HIDDEN: 
        return {
            ...state,
            hidden: !state.hidden
        };
        case CartActionType.ADD_ITEM:
            return{
                ...state,
                cartItem: addItemTocart(state.cartItem, action.payload)
            };
        default:
        return state;    
    }
};

export default CartReducer;
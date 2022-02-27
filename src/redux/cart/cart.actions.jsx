import { CartActionType } from "./cart.types";

export const ToggleCartHidden =()=>(
    {
        type: CartActionType.TOGGLE_CART_HIDDEN
    }
);
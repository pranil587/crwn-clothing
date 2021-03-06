import React from "react";
import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { connect } from "react-redux";
import { ToggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon =({toggleCartHidden})=>(
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"></ShoppingIcon>
        <span className="item-count">0</span>
    </div>
);

const mapDispatchToProps = dispatch=>(
    {
        toggleCartHidden: ()=>dispatch(ToggleCartHidden())
    }
);

const mapStateToProps = state =>(
    {
        itemCount: selectCartItemsCount(state)
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
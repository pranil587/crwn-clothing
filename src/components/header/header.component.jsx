import './header.styles.scss';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo } from '../../assets/crown.svg';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

const Header=({currentUser,hidden})=>(

    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/shop'>CONTACT</Link>
            {currentUser? <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>:<Link className='option' to='/signin'>SIGN IN</Link>}
            <CartIcon></CartIcon>
        </div>
        {hidden?null:<CartDropdown></CartDropdown>}
    </div>

);

const mapStateToProps = (state)=>({
    currentUser: selectCurrentUser(state),
    hidden: selectCartHidden(state)
});

export default connect(mapStateToProps)(Header);
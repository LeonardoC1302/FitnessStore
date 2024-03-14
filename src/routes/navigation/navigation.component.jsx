import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { UserContext } from '../../contexts/user.context'
import { CartDropdownContext } from '../../contexts/cart-dropdown.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import Logo from '../../assets/logo.svg'
import './navigation.styles.scss'

function Navigation(){
    const { currentUser } = useContext(UserContext);
    const { isHidden } = useContext(CartDropdownContext);

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='navigation__logo' to={'/'}>
                    <img src={Logo} alt='logo' className='logo' />
                </Link>
                <nav className='navigation__links'>
                    <Link className='nav-link' to={'/shop'}>
                        Shop
                    </Link>

                    {
                        currentUser ? (
                            <span className='nav-link' onClick={signOutUser}>Sign Out</span>
                        ) : (
                            <Link className='nav-link' to={'/auth'}>
                                Sign In
                            </Link>
                        )
                    }
                    <CartIcon />

                </nav>
                {!isHidden && <CartDropdown />}
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation
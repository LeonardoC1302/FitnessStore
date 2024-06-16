import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { UserContext } from '../../contexts/user.context'
import { CartDropdownContext } from '../../contexts/cart-dropdown.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import Logo from '../../assets/logo.svg'
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles';

function Navigation(){
    const { currentUser } = useContext(UserContext);
    const { isHidden } = useContext(CartDropdownContext);

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to={'/'}>
                    <img src={Logo} alt='logo' className='logo' />
                </LogoContainer>
                <NavLinks>
                    <NavLink to={'/shop'}>
                        Shop
                    </NavLink>

                    {
                        currentUser ? (
                            <NavLink as='span' onClick={signOutUser}>Sign Out</NavLink>
                        ) : (
                            <NavLink to={'/auth'}>
                                Sign In
                            </NavLink>
                        )
                    }
                    <CartIcon />

                </NavLinks>
                {!isHidden && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation
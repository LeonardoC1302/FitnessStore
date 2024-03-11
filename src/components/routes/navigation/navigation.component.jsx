import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { UserContext } from '../../../contexts/user.context'
import { signOutUser } from '../../../utils/firebase/firebase.utils'
import Logo from '../../../assets/logo.svg'
import './navigation.styles.scss'

function Navigation(){
    const { currentUser } = useContext(UserContext);

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

                </nav>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation
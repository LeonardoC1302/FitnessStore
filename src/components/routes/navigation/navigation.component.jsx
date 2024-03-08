import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'
import Logo from '../../../assets/logo.svg'
import './navigation.styles.scss'

function Navigation(){
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
                    <Link className='nav-link' to={'/auth'}>
                        Sign In
                    </Link>
                </nav>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation
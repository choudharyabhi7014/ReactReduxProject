import { GiHamburgerMenu } from 'react-icons/gi';
import { Link, Outlet } from 'react-router-dom';

function Header() {

    return (
        <>
            <div className="header">
                <div className="logo"><a href="#">ShoPZ</a></div>

                <div className="search">

                    <a href=""><input type="text" placeholder="search products" id="input" />
                    </a>
                </div>
                <div className="heading">
                    <ul>
                        <li><Link to={'/'} className="heading">HOME</Link></li>
                        <li><Link to={'pratice/contact'} className="heading">CONTACT US</Link></li>
                        <li><Link to={'pratice/about'} className="heading">ABOUT US</Link></li>
                        <li><Link to={'pratice/cart'} className="heading">ADD TO CART</Link></li>
                        <li><Link to={'pratice/login'} className="heading">LOG IN</Link></li>
                    </ul>
                </div>
                <div className="hambergurmenu">
                    <GiHamburgerMenu />
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Header

import { Link } from 'react-router-dom'
import './Navbar.css'
import { ShopContext} from '../../context/ShopContext'
import { useContext } from 'react';


export default function Navbar() {
    const {setCartCount} = useContext(ShopContext);
    let cartCount = setCartCount();
    return (
        <nav className="nav">
            <Link to="/" className="site-title">Store Name</Link>
            <ul>
                <li> <Link to="/products" >Products</Link> </li>
                <li> <Link to="/about">About</Link> </li>
            </ul>
            <div className='nav-right'>
                <div className='cart'> <Link to="/cart">Cart {cartCount ? cartCount : 0}</Link> </div>
                <div className='profile'> <Link to="/profile">Profile</Link> </div>
            </div>
        </nav>
    )
}

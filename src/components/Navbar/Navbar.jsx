import { Link } from 'react-router-dom'
import './Navbar.css'
import { ShopContext} from '../../context/ShopContext'
import { useContext } from 'react';


export default function Navbar() {
    const { cartQuantity } = useContext(ShopContext);
    return (
        <nav className="nav">
            <Link to="/" className="site-title">Store Name</Link>
            <ul>
                <li> <Link to="/products" >Products</Link> </li>
                <li> <Link to="/about">About</Link> </li>
            </ul>
            <div className='nav-right'>
                <ul>
                    <li> <Link to="/cart">Cart {cartQuantity ? cartQuantity : 0}</Link> </li>
                    <li> <Link to="/profile">Profile</Link></li>
                </ul>

            </div>
        </nav>
    )
}

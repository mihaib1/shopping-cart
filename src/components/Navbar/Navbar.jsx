import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar(cartSize) {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">Store Name</Link>
            <ul>
                <li> <Link to="/products" >Products</Link> </li>
                <li> <Link to="/about">About</Link> </li>
            </ul>
            <div className='nav-right'>
                <div className='cart'> <Link to="/cart">Cart</Link> </div>
                <div className='profile'> <Link to="/profile">Profile</Link> </div>
            </div>
        </nav>
    )
}

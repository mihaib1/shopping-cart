import Navbar from "../components/Navbar/Navbar";
import { useContext } from "react"
import { ShopContext} from '../context/ShopContext'
import CartItem from "../components/CartItem/CartItem";


export default function Cart(){
    const {cartItems} = useContext(ShopContext);

    return(
        <>
            <Navbar></Navbar>
            <h1>Cart</h1>
            <ul>
                {cartItems.map((item) => <CartItem key={item.productId} id={item.productId} name={item.name} price={item.price} quantity={item.quantity} image={item.imageUrl}></CartItem>)}
            </ul>
        </>
    )
}
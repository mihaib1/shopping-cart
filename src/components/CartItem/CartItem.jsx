import stock from '../../assets/no-product.png'
import './CartItem.css'
import { ShopContext} from '../../context/ShopContext'
import { useContext } from 'react'

export default function CartItem({id = 0, name = 'Default Product Name', price = 0, image = stock, quantity = 1}){
    const { removeItemFromCart } = useContext(ShopContext);

    function handleRemoveFromCartClick(){
        let productId = id;
        removeItemFromCart(productId);
    }

    return(
        <li className='cart-item'>
            <div className='left-side'>
                <div className='product-picture'><img src={image}></img></div>
                <div className='product-summary'>
                    <div className='product-name'>
                        {name}
                    </div>
                    <div className='price-per-item'>Price per item: {price / quantity} RON</div>
                </div>
            </div>
 
            <div className='right-side'>
                <div className='total-price'>Total Price: {price} RON</div>
                <div className='quantity'>Quantity: {quantity}</div>
                <div className='remove-from-cart' ><button onClick={() => handleRemoveFromCartClick()} productid={id}>Remove from cart</button></div>
            </div>
        </li>
    )
}
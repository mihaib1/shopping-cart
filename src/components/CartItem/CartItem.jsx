import stock from '../../assets/no-product.png'
import './CartItem.css'
import { ShopContext} from '../../context/ShopContext'

export default function CartItem({id = 0, name = 'Default Product Name', price = 0, image = stock, quantity = 1}){
    return(
        <li id={id} className='cart-item'>
            <div className='product-picture'><img src={image}></img></div>
            <div className='product-summary'>
                <div className='product-name'>
                    {name}
                </div>
                <div className='price-per-item'>Price per item: {price / quantity} RON</div>
            </div>
            <div className='right-side'>
                <div className='total-price'>Total Price: {price} RON</div>
                <div className='quantity'>Quantity: {quantity}</div>
                <div className='remove-from-cart'>Sterge din cos - buton</div>
            </div>
        </li>
    )
}
import "./Card.css"
import stock from '../../assets/no-product.png'
import { useState, useContext } from "react"
import { ShopContext} from '../../context/ShopContext'

export default function Card({id, name = 'Default Product Name', price = 10, image = stock}) {
    const [quantity, setQuantity] = useState(1);
    const {addToCart} = useContext(ShopContext);

    function handleInputChange(event){
        setQuantity(event.target.value);
    }

    function handleAddToCartClick(){
        addToCart(objectForCart);
        setQuantity(1);
    }

    let objectForCart = {
        "productId": id,
        "name": name,
        "itemPrice": price,
        "price": price * quantity,
        "imageUrl": image,
        'quantity': Number(quantity)
    }
    // addToCart(objectForCart)
    return(
        <div className="card">
            <div className="card-pic"><img className="product-picture" src={image}></img></div>
            <div className="card-title">{name.length > 80 ? name.substring(0,79) + "..." : name}</div>
            <div className="price">{price} RON</div>
            <div className="buy-section">
                <div className="add"><button productId = {id} onClick={() => handleAddToCartClick()} >Adauga in cos</button></div>
                <div className="quantity-container">
                    <label htmlFor="quantity"></label>
                    <input type='number' id="quantity" name="quantity" min={0} max={100} value={quantity} onChange={handleInputChange}></input>
                </div>
            </div>
        </div>
    )
}
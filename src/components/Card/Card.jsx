import "./Card.css"
import stock from '../../assets/no-product.png'
import { useState, useContext } from "react"
import { ShoppingCartProvider, useShoppingCart } from "../../context/shoppingCartContext";

export default function Card({id, name = 'Default Product Name', price = 10, image = stock}) {
    const [quantity, setQuantity] = useState(1);
    const {addToCart} = useShoppingCart();
    //const [cart, setCart] = useState([]);

    function handleInputChange(event){
        setQuantity(event.target.value);
    }

    let objectForCart = {
        "productId": id,
        "name": name,
        "price": quantity * price,
        "imageUrl": image,
        'quantity': quantity
    }

    /*function addToCart(){
        console.log("here")
        console.log(cart);
        console.log("Functia addToCart -> quantity = " + quantity);
        let objectForCart = {
            "productId": id,
            "name": name,
            "price": quantity * price,
            "imageUrl": image,
            'quantity': quantity
        }
        
    } */

    

    return(
        <div className="card">
            <div className="card-pic"><img className="product-picture" src={image}></img></div>
            <div className="card-title">{name.length > 80 ? name.substring(0,79) + "..." : name}</div>
            <div className="price">{price} RON</div>
            <div className="buy-section">
                <div className="add"><button productId = {id} onClick={addToCart}>Adauga in cos</button></div>
                <div className="quantity-container">
                    <label htmlFor="quantity"></label>
                    <input type='number' id="quantity" name="quantity" min={0} max={100} value={quantity} onChange={handleInputChange}></input>
                </div>
            </div>
        </div>
    )
}
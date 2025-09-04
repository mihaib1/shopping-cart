import { useState, createContext, useContext } from "react";

const ShoppingCartContext = createContext({});

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({children}){
    const [cartItems, setCartItems] = useState([]);
    let number = 2
    function addToCart(item){
        console.log("here")
        console.log(cart);
        console.log("Functia addToCart -> quantity = " + item.quantity);
        let objectForCart = {
            "productId": item.id,
            "name": item.name,
            "price": item.quantity * item.price,
            "imageUrl": item.image,
            'quantity': item.quantity
        }
        
    }
    return (
    <ShoppingCartContext.Provider value = {{addToCart, cartItems}}>
        {children}
    </ShoppingCartContext.Provider>
    )
}
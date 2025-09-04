import React, { createContext, useState } from "react";

export const ShopContext = createContext({});


export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = function(item) {
        let existingItem = cartItems.find((cartItem) => item.productId == cartItem.productId);
        if(existingItem){
            let existingItemIndex = cartItems.indexOf(existingItem);
            cartItems[existingItemIndex].quantity += Number(item.quantity);
            //cartItems[existingItemIndex].price = cartItems[existingItemIndex].quantity * item.price;
            cartItems[existingItemIndex].price += item.price;
        } else {
            //item.price = item.price * item.quantity;
            cartItems.push(item);
        }
        setCartItems(cartItems); 
    }

    const setCartCount = function(){
        let cartCount = 0;
        if(cartItems.length > 0){
            cartItems.forEach((item) => {
                cartCount += Number(item.quantity);
            })
        }
        return cartCount;
    }

    const providerValue = {cartItems, addToCart, setCartCount}
    return <ShopContext.Provider value ={providerValue}> {props.children} </ShopContext.Provider>
    
}
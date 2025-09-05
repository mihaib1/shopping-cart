import React, { createContext, useState } from "react";

export const ShopContext = createContext({});


export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartQuantity, setCartQuantity] = useState(0);

    const addToCart = function(item) {
        let existingItem = cartItems.find((cartItem) => item.productId == cartItem.productId);
        if(existingItem){
            let existingItemIndex = cartItems.indexOf(existingItem);
            cartItems[existingItemIndex].quantity += Number(item.quantity);
            cartItems[existingItemIndex].price += item.price;
        } else {
            cartItems.push(item);
        }
        setCartItems(cartItems); 
        setCartQuantity(getCartCount());
    }

    const removeItemFromCart = function(id){
        let itemToRemove = cartItems.find((element) => element.productId == id);
        let indexToRemove = cartItems.indexOf(itemToRemove);
        cartItems.splice(indexToRemove, 1);
        setCartItems(cartItems);
        setCartQuantity(getCartCount());
    }

    const getCartCount = function(){
        let cartCount = 0;
        if(cartItems.length > 0){
            cartItems.forEach((item) => {
                cartCount += Number(item.quantity);
            })
        }
        return cartCount;
    }

    const providerValue = {cartItems, addToCart, getCartCount, cartQuantity, removeItemFromCart}
    return <ShopContext.Provider value ={providerValue}> {props.children} </ShopContext.Provider>
    
}
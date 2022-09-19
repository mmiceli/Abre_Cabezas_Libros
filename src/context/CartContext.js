import { createContext, useEffect } from "react";
import { useState } from 'react';

export const CartContext = createContext ()


export const CartProvider = ({children}) => {

    const init = JSON.parse (localStorage.getItem ('carro')) || []

    const [cart, setCart] = useState (init)

    const addToCart = (item) => {
      setCart ([...cart, item])
    }
  
    const isInCart = (id) => {
      return cart.some ((item) => item.id===id)
    }
  
    const cartTotalQuantity = () => {
      return cart.reduce ((acc, item) => acc + item.cantidad, 0)
    }

    const cartTotalCost = () => {
        return cart.reduce ((acc, item) => acc + item.cantidad * item.precioOff, 0)
    }

    const clearCart = () => {
        setCart ([])
    }

    const removeItemCart = (id) => {
        setCart (cart.filter ((item) => item.id !== id))
    }
    
    useEffect (() => {
        localStorage.setItem ('carro', JSON.stringify (cart))
    }, [cart])

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            isInCart,
            cartTotalQuantity,
            cartTotalCost,
            clearCart,
            removeItemCart 
        }}>
            {children}
        </CartContext.Provider>
    )
}
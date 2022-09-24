import { createContext, useEffect } from "react";
import { useState } from 'react';
import Swal from 'sweetalert2';

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
        Swal.fire({
            title: '',
            text: "Estas seguro que quieres vaciar el carrito?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Si!'
          }).then((result) => {
            if (result.isConfirmed) {
                setCart ([])
            }
          })
    }

    const finishPurchase = (id) => {
        Swal.fire({
            title: 'Compra finalizada',
            text: `Tu número de orden de compra es ${id}`,
            icon: 'success',
            confirmButtonColor: '',
            confirmButtonText: 'Ok',
            
        })
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
            finishPurchase,
            removeItemCart 
        }}>
            {children}
        </CartContext.Provider>
    )
}

import './CartContainer.scss';
import { CartItem } from '../CartItem/CartItem';
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";


export const CartContainer = () => {

    const {cartTotalCost} = useContext (CartContext)

    return (
        <div className="cartContainer container">
            <h3>Mi carrito</h3>
            {
                cartTotalCost () ===0
                ? 
                <p>El carrito se encuentra vacío</p>
                : 
                <CartItem/> 
            }
        </div>
    )
}

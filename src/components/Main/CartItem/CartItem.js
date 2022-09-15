import './CartItem.scss';
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { BsTrashFill } from "react-icons/bs";


export const CartItem = () => {

    const {cart, cartTotalCost, removeItemCart, clearCart} = useContext (CartContext)

    return (
        <div className="cartItem">
            {cart.map ((item)=> (
                <div className='cartItem__item' key={item.id}>
                    <img className='cartItem__item__img' src={item.img}/>
                    <h6 className='cartItem__item__nombre'>{item.nombre}</h6>
                    <p className='cartItem__item__precio'>precio: {item.precio}$</p>
                    <p className='cartItem__item__cantidad'>cantidad: {item.cantidad} item</p>
                    <button onClick={() => removeItemCart(item.id)} className="btn btn-danger"><BsTrashFill/></button>
                </div>
            ))}
            <h5 className='cartItem__total'>Total: {cartTotalCost ()}$</h5>
            <button onClick={clearCart} className="btn btn-outline-danger cartItem__button">Vaciar carrito </button>
        </div>
    )
}

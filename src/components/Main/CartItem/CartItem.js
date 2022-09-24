import './CartItem.scss';
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { BsTrashFill } from "react-icons/bs";
import { Link } from 'react-router-dom';


export const CartItem = () => {

    const {cart, cartTotalCost, removeItemCart, clearCart} = useContext (CartContext)


    if (cart.length===0) {
        return (
            <div className='cartEmpty'>
                <h4>Tu carrito se encuentra vacío</h4>
                <p className="my-2">Tenemos disponible una gran cantidad de libros</p>
                <Link to={`/`} className="cartEmpty__link my-2">Comenza a comprar ahora</Link>
            </div>
        )
    }
    
    return (
        <div className="cartItem">
            {cart.map ((item)=> (
            <div className='cartItem__item' key={item.id}>
                <img className='cartItem__item__img' src={item.img}/>
                <h6 className='cartItem__item__nombre'>{item.nombre}</h6>
                <p className='cartItem__item__precio'>precio: {item.precioOff}$</p>
                <p className='cartItem__item__cantidad'>cantidad: {item.cantidad} item</p>
                <button onClick={() => removeItemCart(item.id)} className="btn btn-danger"><BsTrashFill/></button>
            </div>
            ))}
            <h5 className='cartItem__total'>Total: {cartTotalCost ()}$</h5>
            <Link to={'/orderPurchase'} className="btn btn-danger cartItem__button">Terminar compra</Link>
            <hr/>
            <button onClick={clearCart} className="btn btn-outline-danger cartItem__button">Vaciar carrito </button>
        </div>
    )
}

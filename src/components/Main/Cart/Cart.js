import './Cart.scss';
import { useContext} from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from 'react-router-dom';
import { CartItem } from '../CartItem/CartItem';


export const Cart = () => {

    const {cart, cartTotalCost, clearCart} = useContext (CartContext)

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
        <div className="cart">
            {cart.map ((item)=> (<CartItem  item={item} key={item.id}/>))}
            <div className='cart__totalButton'>
                <h5 className='cart__totalButton__total'>Total: {cartTotalCost ()}$</h5>
                <Link to={'/orderPurchase'} className="btn btn-danger cart__totalButton__button">Terminar compra</Link>
                <button onClick={clearCart} className="btn btn-outline-danger cart__totalButton__button">Vaciar carrito </button>
            </div>
        </div>
    )
}

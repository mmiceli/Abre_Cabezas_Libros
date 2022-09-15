import './CartLogo.scss';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';


export const CartLogo = () => {

    const {cartTotalQuantity} = useContext (CartContext)

    return (
        <div className="carrito">
            <span className="carrito__cantidad">{cartTotalQuantity()}</span>
            <picture id="ver" className="">
                <Link to="/cart"><i className="fa-solid fa-cart-arrow-down carrito__img"></i></Link>
            </picture>
        </div>
    )
}
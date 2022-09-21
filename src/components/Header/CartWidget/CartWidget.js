import './CartWidget.scss';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';


export const CartWidget = () => {

    const {cartTotalQuantity} = useContext (CartContext)

    return (
        <div className="carrito">
            <span className={`${cartTotalQuantity () > 0 ?'carrito__cantidadVis':'carrito__cantidadNoVis'}`}>{cartTotalQuantity()}</span>
            <picture id="ver" className="">
                <Link to="/cart"><i className="fa-solid fa-cart-arrow-down carrito__img"></i></Link>
            </picture>
        </div>
    )
}
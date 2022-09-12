import './CartLogo.scss';
import { Link } from 'react-router-dom'


export const CartLogo = () => {
    return (
        <div className="carrito">
            <p className="carrito__cantidad">0</p>
            <picture id="ver" className="">
                <Link to="/cart"><i className="fa-solid fa-cart-arrow-down carrito__img"></i></Link>
            </picture>
        </div>
    )
}
import './Cart.scss';

export const Cart = () => {
    return (
        <div className="carrito">
            <p className="carrito__cantidad">0</p>
            <picture id="ver" className="carrito__img">
                 <i className="fa-solid fa-cart-arrow-down"></i> 
            </picture>
        </div>
    )
}
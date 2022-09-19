
import './CartContainer.scss';
import { CartItem } from '../CartItem/CartItem';


export const CartContainer = () => {

    return (
        <div className="cartContainer">
            <h3>Carrito</h3>
            <CartItem/> 
        </div>
    )
}

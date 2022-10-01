
import './CartContainer.scss';
import { Cart } from '../Cart/Cart';


export const CartContainer = () => {

    return (
        <div className="cartContainer">
            <h3>Carrito</h3>
            <Cart/> 
        </div>
    )
}

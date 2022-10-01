import './ItemCount.scss';
import { CartContext } from '../../../context/CartContext';
import { useContext } from "react";

export const ItemCount = ({stock, counter, setCounter, id}) => {

    const {modifyItemCart} = useContext (CartContext)

    const handleSumar = () => {
        if (counter<stock) {
            setCounter (counter+1) //Modifico un estado. Al modificar el estado cambio la variable.
            modifyItemCart (id, counter+1)
        } 
    }

    const handleRestar = () => {
        if (counter>0) {
            setCounter (counter-1)
            modifyItemCart (id, counter-1)
        }
    }

    return (
        <div className='itemCount'>
            <p className="my-1">Stock: {stock} items</p>
            <div className="">
                <button 
                    onClick={handleRestar} 
                    className={`btn ${counter!==0 ? "btn-outline-danger" : "btn btn-secondary"}`}
                    disabled={counter===0} // inactiva el boton
                >-</button>
                <span className="mx-2">{counter}</span>
                <button 
                    onClick={handleSumar} 
                    className={`btn ${counter!==stock ? "btn-outline-danger" : "btn btn-secondary"}`}
                    disabled={counter===stock}
                >+</button>
            </div>
        </div>
    )
}


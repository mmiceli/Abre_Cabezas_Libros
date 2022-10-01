
import './CartItem.scss';
import { BsTrashFill } from "react-icons/bs";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { ItemCost } from '../ItemCost/ItemCost';
import { ItemCount } from '../ItemCount/ItemCount';


export const CartItem = ({item}) => {

    const {removeItemCart, cartItemTotalCost} = useContext (CartContext)
    const [cantidad, setCantidad] = useState (item.cantidad)

    return (
        <div className='cartItem'>
            <img className='cartItem__img' src={item.img}/>
            <h6 className='cartItem__nombre'>{item.nombre}</h6>
            <div className='cartItem__precio'>
                <ItemCost 
                    precio= {item.precio}
                    descuento= {item.descuento}
                />
            </div>
            <div className='cartItem__cantidad'>
                <ItemCount 
                    stock={item.stock}
                    counter={cantidad===0 ?removeItemCart(item.id):cantidad}
                    setCounter= {setCantidad}
                    id= {item.id}
                />
            </div>
            <h5 className='cartItem__costoItem'>${cartItemTotalCost (item.id)}</h5>
            <div className="cartItem__button">
                <button onClick={() => removeItemCart(item.id)} className="btn btn-danger"><BsTrashFill/></button>
            </div>   
        </div>
    )
}

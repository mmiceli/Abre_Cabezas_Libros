
import { ItemCost } from '../ItemCost/ItemCost';
import { ItemCount } from '../ItemCount/ItemCount';
import { ItemCarousel } from '../ItemCarousel/ItemCarousel';
import { CartContext} from '../../../context/CartContext';
import { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import './ItemDetail.scss';

export const ItemDetail = ({item}) => {

    const {cart, addToCart, isInCart} = useContext (CartContext)
    console.log (cart)

    const [cantidad, setCantidad] = useState (1) //Estado, gral se usa setXXX. const [variable, fn] = useState (valor de variable)

    const handleAgregar = () => {

        const itemCart = {
            id: item.id,
            img: item.imagen,
            nombre: item.nombre,
            precio: item.precio,
            descuento: item.descuento,
            precioOff: item.precio - (item.precio * (item.descuento/100)),
            cantidad    
        }

        addToCart (itemCart)
    }

    return (
        <div className="itemDetail">
            <div className="itemDetail__sectionOne">
                <ItemCarousel item={(item)}/>
            </div>
            <div className="itemDetail__sectionTwo">
                <h3 className="my-3">{item.nombre}</h3>
                <ItemCost 
                    precio= {item.precio}
                    descuento= {item.descuento}
                />
                <h5 className="my-3">Stock</h5>
                <p className="my-3">Cantidad: {item.stock} items disponibles</p>

                {
                    isInCart (item.id) //devuelve true o false
                    ? 
                        <Link to={`/cart`} className="buttonAddCart__button__item">
                                <button className="btn btn-danger">Terminar mi compra</button>
                        </Link>
                    : 
                        <ItemCount 
                        stock={item.stock}
                        counter={cantidad}
                        setCounter= {setCantidad}
                        handleAgregar={handleAgregar}
                        />
                }               
            </div>
        </div>
        
    )
}
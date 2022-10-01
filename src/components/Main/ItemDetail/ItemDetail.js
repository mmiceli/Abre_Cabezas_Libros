
import { ItemCost } from '../ItemCost/ItemCost';
import { ItemCount } from '../ItemCount/ItemCount';
import { ItemCarousel } from '../ItemCarousel/ItemCarousel';
import { CartContext} from '../../../context/CartContext';
import { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import './ItemDetail.scss';

export const ItemDetail = ({item}) => {

    const {addToCart, isInCart} = useContext (CartContext)

    const [cantidad, setCantidad] = useState (0) //Estado, gral se usa setXXX. const [variable, fn] = useState (valor de variable)

    const handleAgregar = () => {

        const itemCart = {
            id: item.id,
            img: item.imagen,
            nombre: item.nombre,
            precio: item.precio,
            descuento: item.descuento,
            precioOff: item.precio - (item.precio * (item.descuento/100)),
            stock: item.stock,
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
                <a href="" className="itemDetail__sectionTwo__medioPago">Ver los medios de pago</a>

                {
                    isInCart (item.id)
                    ?   <>
                            <Link to={`/cart`} className="my-2 itemDetail__sectionTwo__button">
                                <button className="btn btn-danger itemDetail__sectionTwo__button__link">Ir al carrito</button>
                            </Link>
                            <Link to={`/orderPurchase`} className="my-2 itemDetail__sectionTwo__button">
                                <button className="btn btn-outline-danger itemDetail__sectionTwo__button__link">Terminar compra</button>
                            </Link>
                        </>
                    : 
                        <>
                            <ItemCount 
                                stock={item.stock}
                                counter={cantidad}
                                setCounter= {setCantidad}
                            />
                            <div className="itemDetail__sectionTwo__button my-2">
                                <button 
                                    onClick={handleAgregar} 
                                    className={`btn buttonAddCart__button__item ${cantidad!==0 ? "btn-outline-danger" : "btn btn-outline-secondary"}`}
                                    disabled={cantidad===0}
                                >Agregar al carrito</button>          
                            </div>
                        </>
                }               
            </div>
        </div>
        
    )
}

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Item } from '../Item/Item';
import './ItemCost.scss';

export const ItemCost = ({precio, descuento}) => {
   
    const precioInicial=precio

    if (descuento) {
        precio = (precio - (precio * (descuento/100)))
    }


    return (
            <>
                {descuento 
                    ?
                        <>
                        <del className="precio my-3">{precioInicial}$</del>
                        <div className="precioFinal">
                            <h4 className="">{precio}$</h4>
                            <p className="precioFinal__descuento">{descuento}% OFF</p>
                        </div>
                        </>
                    :
                        <div className="precioFinal__uno">
                            <h4 className="">{precio}$</h4>
                        </div>
                }

                <a href="" className="medioPago">Ver los medios de pago</a>
            </>            
    )
}
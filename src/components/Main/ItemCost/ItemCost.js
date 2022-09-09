
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ItemCost.scss';

export const ItemCost = ({precio, descuento}) => {
   
    const precioInicial=precio

    if (descuento !==0) {
        precio = (precio - (precio * (descuento/100)))
    }


    return (
        <div className=''>
            <del className="precio my-3">{precioInicial}$</del>
            <div className="precioFinal my-3">
                <div className="precioFinal__uno">
                    <h4 className="precioFinal__uno__precio">{precio}$</h4>
                    <p className="precioFinal__uno__descuento">{descuento}% OFF</p>
                </div>
                <a href="" className="precioFinal__dos">Ver los medios de pago</a>
            </div>            
        </div>
    )
}

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
                <div className='precio'>
                    <del className="precio__precioInicial">{precioInicial}$</del>
                    <div className="precio__precioFinal">
                        <h5 className="">{precio}$</h5>
                        <p className="precio__precioFinal__descuento">{descuento}% OFF</p>
                    </div>
                </div>
            :
                <div className='precio'>
                    <br/>
                    <div className="">
                        <h5 className="">{precio}$</h5>
                    </div>
                </div>
            }               
        </>            
    )
}
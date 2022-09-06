
import './ItemCost.scss';

export const ItemCost = ({item}) => {
    
    const {precio, descuento}= item
    

    let finalCost= precio
    
    if (descuento !==0) {
        finalCost= precio - (precio * (descuento/100))
    }

    return (
        <div className=''>
            <del className="precio my-3">{precio}$</del>
            <div className="precioFinal my-3">
                <div className="precioFinal__uno">
                    <h4 className="precioFinal__uno__precio">{finalCost}$</h4>
                    <p className="precioFinal__uno__descuento">{descuento}% OFF</p>
                </div>
                <a href="" className="precioFinal__dos">Ver los medios de pago</a>
            </div>            
        </div>
    )
}
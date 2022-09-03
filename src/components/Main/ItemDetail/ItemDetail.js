
import { ItemCount } from '../ItemCount/ItemCount';
import './ItemDetail.scss';

export const ItemDetail = ({item}) => {

    return (
        <div className="itemDetail">
            <div className="itemDetail__sectionOne">
                <img src={item.imagen}/>
            </div>
            <div className="itemDetail__sectionTwo">
                <h3 className="my-3">{item.nombre}</h3>
                <h5 className="my-3">{item.precio}$</h5>
                <h5 className="my-3">Stock</h5>
                <p className="my-3">Cantidad: {item.cantidad} items disponibles</p>
                <ItemCount stock={(item.cantidad)}/>
            </div>
        </div>
        
    )
}
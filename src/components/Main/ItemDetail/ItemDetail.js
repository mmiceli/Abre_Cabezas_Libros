
import { ItemCost } from '../ItemCost/ItemCost';
import { ItemCount } from '../ItemCount/ItemCount';
import { ItemCarousel } from '../ItemCarousel/ItemCarousel';
import './ItemDetail.scss';

export const ItemDetail = ({item}) => {
    const {nombre, cantidad}=item

    return (
        <div className="itemDetail">
            <div className="itemDetail__sectionOne">
                <ItemCarousel item={(item)}/>
            </div>
            <div className="itemDetail__sectionTwo">
                <h3 className="my-3">{nombre}</h3>
                <ItemCost item={(item)}/>
                <h5 className="my-3">Stock</h5>
                <p className="my-3">Cantidad: {cantidad} items disponibles</p>
                <ItemCount stock={(cantidad)}/>
            </div>
        </div>
        
    )
}
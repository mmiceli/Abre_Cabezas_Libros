
import './Item.scss';
import { Link } from 'react-router-dom';
import { ItemCost } from '../ItemCost/ItemCost';

export const Item = ({item}) => {
    return (
        <div className="item1">
            <img src={item.imagen}/>
            <h6>{item.nombre}</h6>
            <section>
                <ItemCost
                precio= {item.precio}
                descuento= {item.descuento}
                />
            </section>
            <p>Stock: {item.stock} items</p>
            <p>{item.genero}</p>
            <Link to={`/item/${item.id}`} className="btn btn-danger my-2">Ver detalle</Link>
        </div>
    )
}

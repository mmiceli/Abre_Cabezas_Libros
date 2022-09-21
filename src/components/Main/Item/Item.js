import { Link } from 'react-router-dom';
import './Item.scss';

export const Item = ({item}) => {
    return (
        <div className="item1">
            <img src={item.imagen}/>
            <h6>{item.nombre}</h6>
            <p>{item.precio}$</p>
            <p>Stock: {item.stock} items</p>
            <p>{item.genero}</p>
            <Link to={`/item/${item.id}`} className="btn btn-danger my-2">Ver detalle</Link>
        </div>
    )
}

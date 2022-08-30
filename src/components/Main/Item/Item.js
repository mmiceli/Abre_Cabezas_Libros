import './Item.scss';

export const Item = ({item}) => {
    return (
        <div className="item1">
            <img className="item1_img" src={item.imagen}/>
            <h6>{item.nombre}</h6>
            <p>{item.precio}$</p>
            <p>Stock: {item.cantidad} items</p>
            <p>{item.genero}</p>

        </div>
    )
}

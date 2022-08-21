
import './ItemListContainer.scss';

export const ItemListContainer = (props) => {
    console.log (props.usuario)
    return (
        <div>
            <h2 className="saludo">Hola {props.usuario}</h2>
        </div>
    )
}
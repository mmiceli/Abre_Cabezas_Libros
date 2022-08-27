
import './ItemListContainer.scss';
import {ItemCount} from './ItemCount/ItemCount'

export const ItemListContainer = (props) => {
    console.log (props.usuario)
    return (
        <div>
            <h2 className="saludo">Hola {props.usuario}</h2>
            <ItemCount stock={8}/>
            <ItemCount stock={10}/>
        </div>
    )
}
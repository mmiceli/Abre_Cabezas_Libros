
import './ItemListContainer.scss';
//import {ItemCount} from '../ItemCount/ItemCount'
import { pedirDatos } from '../../../helpers/pedirDatos';
import { useEffect, useState } from 'react';
import { ItemList } from '../ItemList/ItemList';

export const ItemListContainer = () => {

    const [items, setItems] = useState ([])

    useEffect (() => {
        pedirDatos ()
            .then ((res)=> {
                setItems (res)
            })
                
    }, [])

    return (
        <div className="itemListContainer">
            <h4 className="">Libros destacados</h4>
            <ItemList items = {items}/>
        </div>
    )
}

//<ItemCount stock="8"/>
//<ItemCount stock="10"/>

import './ItemDetailContainer.scss';
//import {ItemCount} from '../ItemCount/ItemCount'
import { pedirDatos } from '../../../helpers/pedirDatos';
import { useEffect, useState } from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {

    const [item, setItem] = useState (null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams ()        

    useEffect (() => {
        setLoading(true)
        pedirDatos ()
            .then ((res)=> {
                setItem (res.find((item)=> item.id === Number(itemId)))
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
                
    }, [])

    return (
        <div className="itemDetailContainer container">
            {
                loading 
                ? <p>Cargando...</p>
                : <ItemDetail item = {item}/>
            }
        </div>
    )
}
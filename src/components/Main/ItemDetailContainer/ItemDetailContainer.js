
import './ItemDetailContainer.scss';
//import { pedirDatos } from '../../../helpers/pedirDatos';
import { useEffect, useState } from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { Loader } from '../Loader/Loader'
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../../firebase/firebase'

export const ItemDetailContainer = () => {

    const [item, setItem] = useState (null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams ()        

    useEffect (() => {
        setLoading(true)

        const docRef = doc (db, 'Productos', itemId)

        getDoc (docRef)

            .then((doc) => {
                setItem ({id:doc.id, ...doc.data ()})
            })

            .finally(() => {
                setLoading(false)
            })
        // pedirDatos ()
        //     .then ((res)=> {
        //         setItem (res.find((item)=> item.id === Number(itemId)))
        //     })
        //     .catch( (error) => {
        //         console.log(error)
        //     })
        //     .finally(() => {
        //         setLoading(false)
        //     })
                
    }, [])

    return (
        <div className="itemDetailContainer container">
            {
                loading 
                ? <Loader/>
                : <ItemDetail item = {item}/>
            }
        </div>
    )
}
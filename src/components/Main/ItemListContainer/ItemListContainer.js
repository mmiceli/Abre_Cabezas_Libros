import './ItemListContainer.scss';
//import {pedirDatos} from '../../../helpers/pedirDatos';
import {useEffect,useState} from 'react';
import {Loader} from '../Loader/Loader';
import {ItemList} from '../ItemList/ItemList';
import {useParams} from 'react-router-dom';
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from '../../../firebase/firebase';

export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId, busquedaId} = useParams()


    useEffect(() => {
        setLoading(true)

        const productosRef = collection (db, 'Productos')

        let q= null

        if (categoryId) {
             q= query (productosRef, where ('genero', '==', categoryId))

        } else if (busquedaId) { 
            q= query (productosRef, where ('nombre', '==', busquedaId))

        } else {
            q= productosRef
        }



        // const q = pruebaId
        //          ? query (productosRef, where ('genero', '==', pruebaId))
        //          : productosRef

        getDocs (q)

            .then((res) => {
                const productosDB = res.docs.map ((doc)=> ({id:doc.id, ...doc.data ()}))
                setItems (productosDB)
                console.log (productosDB)
            })

            .finally(() => {
                setLoading(false)
            })

        // pedirDatos()
        //     .then((res) => {
        //         if (!categoryId) {
        //             setItems(res)
        //         } else {
        //             setItems(res.filter((item) => item.genero === categoryId))
        //         }
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })
        //     .finally(() => {
        //         setLoading(false)
        //     })

    }, [categoryId, busquedaId])

    return (
        <div className = "itemListContainer container">
            <h4 className = "itemListContainer__titule" > Libros </h4>
            {
                loading
                ? <Loader/>
                : <ItemList items = {items}/>
            }

        </div>
    )
}

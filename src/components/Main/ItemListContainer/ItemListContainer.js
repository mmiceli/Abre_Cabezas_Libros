import './ItemListContainer.scss';
//import {ItemCount} from '../ItemCount/ItemCount'
import {pedirDatos} from '../../../helpers/pedirDatos';
import {useEffect,useState} from 'react';
import {ItemList} from '../ItemList/ItemList';
import {useParams} from 'react-router-dom';

export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const {
        categoryId
    } = useParams()

    useEffect(() => {
        setLoading(true)
        pedirDatos()
            .then((res) => {
                if (!categoryId) {
                    setItems(res)
                } else {
                    setItems(res.filter((item) => item.genero === categoryId))
                }
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [categoryId])

    return ( 
        <div className = "itemListContainer container">
            <h4 className = "itemListContainer__titule" > Libros </h4> 
            {
                loading
                ?
                    < p > Cargando... </p> :
                    < ItemList items = {items}/>
            }

        </div>
    )
}

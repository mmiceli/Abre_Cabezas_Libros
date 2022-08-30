import './ItemList.scss';
import { Item } from '../Item/Item';

export const ItemList = ({items=[]}) => {

    return (
        <div className="itemList">
                {items.map ((prod)=> <Item item={prod} Key={prod.id}/>)}
        </div>
    )
}
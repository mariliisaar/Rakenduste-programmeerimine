import Item from './Item';
import './ItemList.css';

function ItemList(props) {
    return (
        <div className="item-list">
            {props.items.map(item => (
                <Item
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    category={item.category}
                />
            ))}
        </div>
    );
}

export default ItemList;
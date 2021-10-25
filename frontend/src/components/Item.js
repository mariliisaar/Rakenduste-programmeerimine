import { Link } from 'react-router-dom';
import '../App.css';
import './Item.css';

function Item(props) {
    function handleDelete(itemId) {
        props.deleteItem(itemId);
    }

    return (
        <div className="item-wrapper">
            {
                props.isSingleItemView ?
                <>
                    <div className="itemName">{ props.name }</div>
                    <div className="itemPrice">{ props.price }€</div>
                    <div className="itemCategory">{ props.category }</div>
                </>
                :
                <Link to={`/item/${props.id}` }>
                    <div className="itemName">{ props.name }</div>
                    <div className="itemPrice">{ props.price }€</div>
                    <div className="itemCategory">{ props.category }</div>
                </Link>
            }
            { props.isAddToCart ? 
                <div className="link">
                    <Link to="/cart">
                        <img src="/plus.svg" alt="add" />Lisa ostukorvi
                    </Link>
                </div>
                : <>
                    <button className="closeButton" onClick={() => handleDelete(props.id)}>X</button>
                    <Link className="editButton" to={`/edit-item/${props.id}` }>
                        <button>Muuda eset</button>
                    </Link>
                </>
            }
        </div>
    )
}

export default Item;
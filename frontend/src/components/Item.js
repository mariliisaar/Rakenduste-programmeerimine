import './Item.css';

function Item(props) {
    return (
        <div className="wrapper">
            <div className="itemName">{ props.name }</div>
            <div className="itemPrice">{ props.price }€</div>
            <div className="itemCategory">{ props.category }</div>
        </div>
    )
}

export default Item;
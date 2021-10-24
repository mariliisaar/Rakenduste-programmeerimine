import './Category.css';

function Category(props) {
    return (
        <div className="wrapper">
            <div className="categoryName">{ props.name }</div>
            <div className="categoryType">({ props.type })</div>
        </div>
    )
}

export default Category;
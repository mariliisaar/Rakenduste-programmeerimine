import './Category.css';

function Category(props) {
    return (
        <div className="category-wrapper">
            <div className="categoryName">{ props.name }</div>
            <div className="categoryType">({ props.type })</div>
        </div>
    )
}

export default Category;
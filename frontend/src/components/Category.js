function Category(props) {
    return (
        <div className="categoryName">{ props.name } (<span className="categoryType">{ props.type }</span>)</div>
    )
}

export default Category;
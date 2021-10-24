import Category from './Category';
import './ItemList.css';

function CategoryList(props) {
    return (
        <div className="item-list">
            {props.categories.map(category => (
                <Category
                    key={category.id}
                    name={category.name}
                    type={category.category}
                />
            ))}
        </div>
    );
}

export default CategoryList;
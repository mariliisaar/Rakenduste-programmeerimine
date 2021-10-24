import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CategoryList from '../components/CategoryList';

function CategoryListView() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedCategories, setLoadedCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/categories').then(res => {
            return res.json();
        }).then(data => {
            console.log(data);
            setIsLoading(false);
            setLoadedCategories(data);
        });
    }, [])

    if (isLoading) {
        return (<div>Laeb...</div>);
    }

    return (
        <div className="main">
            <h1>Kategooriad</h1>
            <div className="link">
                <Link to="add-category">
                    <img src="plus.svg" alt="add" />
                    Lisa uus kategooria
                </Link>
            </div>
            <CategoryList categories={loadedCategories} />
        </div>
    )
}

export default CategoryListView;
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ItemList from '../components/ItemList';

function AdminHome() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedItems, setLoadedItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/items').then(res => {
            return res.json();
        }).then(data => {
            setIsLoading(false);
            setLoadedItems(data);
        });
    }, [])

    function makeDeleteRequest(itemId) {
      fetch('http://localhost:8080/delete-item/' + itemId, 
          { method: 'DELETE' }
        ).then(res => {
            return res.json();
        }).then(data => {
            setIsLoading(false);
            setLoadedItems(data);
        });
    }

    if (isLoading) {
        return (<div>Laeb...</div>);
    }

    return (
        <div className="main">
            <h1>Admin</h1>
            <div className="link">
                <Link to="/add-item">
                    <img src="plus.svg" alt="add" />
                    Lisa uus ese
                </Link>
            </div>
            <ItemList items={loadedItems} isAddToCart={false} onDeleteItem={makeDeleteRequest} />
        </div>
    )
}

export default AdminHome;
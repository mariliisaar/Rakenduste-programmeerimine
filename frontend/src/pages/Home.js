import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ItemList from '../components/ItemList';

function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedItems, setLoadedItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/items').then(res => {
            return res.json();
        }).then(data => {
            console.log(data);
            setIsLoading(false);
            setLoadedItems(data);
        });
    }, [])

    if (isLoading) {
        return (<div>Laeb...</div>);
    }

    return (
        <div className="main">
            <h1>Esemed</h1>
            <div className="link">
                <Link to="add-item">
                    <img src="plus.svg" alt="add" />
                    Lisa uus ese
                </Link>
            </div>
            <ItemList items={loadedItems} />
        </div>
    )
}

export default Home;
import { useState, useEffect } from 'react';
import ItemList from '../components/ItemList';

function Home() {
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

    if (isLoading) {
        return (<div>Laeb...</div>);
    }

    return (
        <div className="main">
            <h1>Esemed</h1>
            <ItemList items={loadedItems} isAddToCart={true} />
        </div>
    )
}

export default Home;
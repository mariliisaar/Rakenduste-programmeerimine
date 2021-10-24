import AddCategoryForm from '../components/AddCategoryForm'

function AddCategory() {
    function itemSubmitHandler(category) {
        fetch('http://localhost:8080/categories', {
            method: 'POST',
            body: JSON.stringify(category),
            headers: {
                'Content-Type':'application/json'
            }
        }).then(res => ( res.status === 200 ? window.location.href = 'http://localhost:3000/categories' : ''));
    }

    return(
        <div className="main">
            <h1>Lisa uus kategooria</h1>
            <AddCategoryForm onAddCategory={itemSubmitHandler} />
        </div>
    );
}

export default AddCategory;
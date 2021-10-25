import { useState, useEffect, useRef } from 'react';

function EditItem() {
  const [item, setItem] = useState(null);
  const nameInputRef = useRef();
  const priceInputRef = useRef();
  const categoryInputRef = useRef();

  useEffect(() => {
    const itemId = window.location.href.split("/edit-item/")[1];
    fetch('http://localhost:8080/view-item/' + itemId).then(res => {
      return res.json();
    }).then(data => {
      setItem(data);
    })
  }, [])

  if (!item) {
    return (<div>Laeb...</div>);
  }

  function formSubmitHandler(e) {
    e.preventDefault();
    const nameValue = nameInputRef.current.value;
    const priceValue = priceInputRef.current.value;
    const categoryValue = categoryInputRef.current.value;

    const itemSubmitted = {
      id: item.id,
      name: nameValue,
      price: priceValue,
      category: categoryValue
    }

    // TODO: api päring eraldi komponenti (päring ja vorm eraldi)
    fetch('http://localhost:8080/edit-item', {
        method: 'POST',
        body: JSON.stringify(itemSubmitted),
        headers: {
            'Content-Type':'application/json'
        }
    }).then(res => ( res.status === 200 ? window.location.href = 'http://localhost:3000/admin' : ''));
  }

  return(
    <div className="main">
      <h1>Muuda eset</h1>
      <form onSubmit={formSubmitHandler}>
          <label>Eseme nimi</label><br />
          <input type="text" placeholder="Nimi" defaultValue={item.name} required ref={nameInputRef} /><br />
          <label>Eseme hind</label><br />
          <input type="number" placeholder="0" defaultValue={item.price} required ref={priceInputRef} /><br />
          <label>Eseme kategooria</label><br />
          <input type="text" placeholder="Kategooria" defaultValue={item.category} required ref={categoryInputRef} /><br />
          <button>Muuda</button>
      </form>
    </div>
  )
}

export default EditItem;
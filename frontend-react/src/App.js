import './App.css';
import Greeting from './components/Greeting';
import Fun from './components/Fun';
import { useState } from 'react';


function App() {
  const [magicNumber, setMagicNumber] = useState(0)
  const [show, setShow] = useState(true)
  return (
    <div className="App">
      {show && <h1>{ magicNumber }</h1>}
      <Fun 
        magicNumber={magicNumber} 
        setMagicNumber={setMagicNumber} 
        show={show}
        setShow={setShow}
      />
      <Fun 
        magicNumber={magicNumber} 
        setMagicNumber={setMagicNumber} 
        amount={5}
        show={show}
        setShow={setShow} 
      />
      <Fun 
        magicNumber={magicNumber} 
        setMagicNumber={setMagicNumber} 
        amount={25}
        show={show}
        setShow={setShow}
      />
      <Greeting name="Marilii" age="34" />
    </div>
  );
}

export default App;

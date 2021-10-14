import './App.css';
import Greeting from './components/Greeting';
import Fun from './components/Fun';
import Square from './components/Square';
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
      <Square width="100px" height="100px" colour="pink" visible="true" />
      <Square width="50px" height="100px" colour="blueviolet" visible="true" />
      <Square width="100%" height="10px" colour="cornflowerblue" visible="true" />
      <Square width="500px" height="100px" colour="red" />
      <Square width="50px" height="50px" colour="aquamarine" visible="true" />
    </div>
  );
}

export default App;

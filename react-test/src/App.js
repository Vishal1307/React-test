
import './App.css';
import { Button } from './component/Button';
import { useEffect, useState } from 'react';

function App() {
  const [counter,setCounter]=useState(0)
  const handleButton=(val)=>{
    setCounter((prev)=>prev+val)
  }
  
 
  return (
    <div className="App">
      <h1>counter:-{counter}</h1>
      <Button data-testid="add" colorChange={"green"} variant={"ghost"} onClick={()=>handleButton(5)}>ADD</Button>
      <Button  onClick={()=>handleButton(-5)}>REDUCE</Button>
      
    </div>
  );
}

export default App;

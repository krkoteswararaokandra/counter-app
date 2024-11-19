import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {useState} from 'react';

function App() {
  const [count,setCount] = useState(0);

  const addHandler = ()=>{
    setCount(count+1);
}
const decrement = ()=>{
    setCount(count-1);
}
const doubleHandler = ()=>{
    setCount((prev)=>prev*2);
}
const resetHandler = ()=>{
    setCount(0);
}
  return (
    <div className="container">
    <div className="App">
      <div>
            <h1 style={{textAlign:"center"}} >Counter</h1>
            <p style={{textAlign:"center"}}>{`Count:${count}`}</p>
            <div id="buttons">
            <button className="btn btn-success"onClick={addHandler}>Increment</button>
            <button className="btn btn-info" style={{color:"white"}} onClick={decrement}>Decrement</button>
            <button  className="btn btn-primary" onClick={doubleHandler}>double</button>
            <button className="btn btn-danger" onClick={resetHandler}>Reset</button>
            </div>
            </div>
    </div>
    </div>
  );
}

export default App;

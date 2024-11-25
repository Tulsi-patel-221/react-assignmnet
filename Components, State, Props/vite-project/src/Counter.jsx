import React,{useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0); 
  
    const incrementCount = () => {
      setCount(count + 1); 
    };
  
    return (
      <div>container
        <h1>Counter</h1>
        <p >Current Count: {count}</p>
        <button  onClick={incrementCount}>Increment</button>
          
        
      </div>
    );
  };
export default Counter

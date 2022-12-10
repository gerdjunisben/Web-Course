import React,{useState} from "react";

function App() {
  const [count,setCount] = useState(0);

function click()
{
  setCount(count+1);
}

  return <div className="container">
  <h1>{count}</h1>
  <button onCLick={click}>+</button>
</div>;
}

export default App;

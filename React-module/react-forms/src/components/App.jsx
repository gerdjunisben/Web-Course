import React,{useState} from "react";



function App() {
  const [name,setName] = useState("");
  const [heading,setHeading] = useState("");
  
  function onChange(event)
  {
      setName(event.target.value);
  }
  function onClick()
  {
    setHeading(name);
  }
  return (
    <div className="container">
      <h1>Hello {heading}</h1>
      <input onChange={onChange} type="text" placeholder="What's your name?" />
      <button onClick={onClick}>Submit</button>
    </div>
  );
}

export default App;

import React,{useState} from "react";

function App() {
  const [text,setText] = useState("");
  const [items,setItems] = useState([]);
  function changeHandler(event){
    setText(event.target.value);
  }
  function handleClick()
  {
    setItems((prevValues)=>{
      return [... prevValues, text]
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={changeHandler} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item)=>{
            return <li>{item}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;

import React, {useState} from "react";

function App() {
  const [headingText,setHeadingText] = useState("Hello");
  const [mouseOver,setMouseOver] = useState(false);
  function handleClick(){
    setHeadingText("submitted");
  }
  function onMouseOver()
  {
    setMouseOver(true);
  }
  function onMouseOut()
  {
    setMouseOver(false);
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button onClick={handleClick}
      style={{backgroundColor:mouseOver?"black":"white"}}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}>Submit</button>
    </div>
  );
}

export default App;

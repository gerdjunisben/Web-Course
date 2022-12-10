import React, {useState} from "react";

function App() {
  const now = new Date().toLocaleTimeString();
  const [time,setTime] = useState(now);
  setInterval (updateTime,1000);
//Challenge:
//1. Given that you can get the current time using:
function updateTime(){
  setTime(new Date().toLocaleTimeString());
}
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onclick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;

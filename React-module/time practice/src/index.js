import React from "react";
import ReactDOM from "react-dom";
import "../public/styles.css";

const date = new Date();
const currentTime = date.getHours();
var text = "";
const currentStyle = {
  color:""
};

if(currentTime <12)
{
  text="Good Morning";
  currentStyle.color="red";
}
else if(currentTime<18)
{
  text="Good Afternoon"
  currentStyle.color="green";
}
else
{
  text="Good Night"
  currentStyle.color="blue";
}

ReactDOM.render(<div><h1 style={currentStyle}>{text}</h1></div>,document.getElementById("root"));



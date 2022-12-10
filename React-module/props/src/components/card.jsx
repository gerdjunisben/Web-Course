import React from "react";
function card(props){
  return <div><h2>{props.name}</h2>
  <img
    src={props.image}
    alt="avatar_img"
  />
  <p>{props.number}</p>
  <p>{props.email}</p></div>
}

export default card;

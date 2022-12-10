import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      {contacts.map((c)=>{
        return <Card key={c.id} name={c.name} img={c.imgURL}
        tel={c.phone} email={c.email}/>
      })}
    </div>
  );
}

export default App;

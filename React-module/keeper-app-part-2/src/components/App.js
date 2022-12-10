import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes"

function App() {
  return (
    <div>
      <Header />
      {notes.map((n)=>{

        return <Note title={n.title} body={n.content}/>
      })}
      <Footer />
    </div>
  );
}

export default App;

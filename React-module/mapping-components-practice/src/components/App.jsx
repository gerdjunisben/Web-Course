import React from "react";
import emojipedia from "../emojipedia";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map((e)=>{
          return <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label={e.name}>
              {e.emoji}
            </span>
            <span>{e.name}</span>
          </dt>
          <dd>
            {e.meaning}
          </dd>
        </div>
        })}
        
      </dl>
    </div>
  );
}

export default App;

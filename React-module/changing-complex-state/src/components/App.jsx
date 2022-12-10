import React,{useState} from "react";

function App() {
  const [fullName,setFullName] = useState({
    fName:"",
    lName:""
  });
  function handleChange(event)
  {
    let val = event.target.value;
    let name = event.target.name;

    setFullName((prevValue)=>{
      if(name==="fName")
        return{
          fName:val,
          lName:prevValue.lName
        }
      else
      return{
        fName:prevValue.fName,
        lName:val
      }
    })
  }
  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input onChange={handleChange} name="fName" placeholder="First Name" />
        <input onChange={handleChange} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

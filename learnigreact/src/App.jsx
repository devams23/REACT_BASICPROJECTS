import { useState } from "react";
import Profile from "./components/Profile";

function App() {
  let [a,counter] = useState(10)
  let [text,settext] = useState("hello")
  const addvalue = ()=>{
    if(a<=19){
      counter(a+1);
    }
    //console.log("counter value", a)
  }
  const remvalue = ()=>{
    if (a>=1) {
        counter(a-1);
    }
    //console.log("counter value", a)
  }
  //---------------------------------------------------------
  const add3value = ()=>{
    counter(c => c+1);
    counter(c => c+1);
    counter(c => c+1);
    //console.log("counter value", a)
  }
  
  const rem3value = ()=>{
      counter(c => c-1);
      counter(c => c-1);
      counter(c => c-1);
    //console.log("counter value", a)
  }
  console.log("hello")
  const changetext = (e)=>{
    settext(e.target.value);
    console.log("text" , text)  // this is will not immediately log the new results , as it is not rendered yet 
  }
  return (
    <>
      <h1 className="text-3xl font-bold underline text-yellow-600">hello this is something good</h1>
      <h2 >Value {a}</h2>
      <button  onClick={addvalue}>Increase value</button>
      <button onClick={remvalue}>Decrease value</button>
      <br />
      <br />
      <input type="text" name="sent" id="sent" value={text} onChange={changetext} />
      <p >Above text {text}</p>
      {/* <Profile username="Mary lisa"/>
      <Profile username="Lary Mongo"/> */}
      <h2>concept of counter :</h2>
      <h2 >Value {a}</h2>

      <button  onClick={add3value}>Increase value</button>
      <button onClick={rem3value}>Decrease value</button>
    </>
  )
}

export default App

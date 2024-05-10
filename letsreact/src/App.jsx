import React, { useState } from "react";
import Extra from "./Extra";
import News from "./news";

// component ek function hai jo jsx ko return karta hai woh

function App() {
  const [a, b] = useState("devam");
  const details = {age:34};
  const [c,f] = [34,42];
  return( 
    <>
    <div className="h-96 bg-slate-800 p-8">
     <Extra details={details}/> {/*this is sending data to the component "Extra"*/}
      <div className='bg-slate-700'>
      <h1 className="text-3xl text-white font-bold underline py-3 okay">{a}</h1>
      </div>
      <h2 className={`${a === "devam" ? "text-red-600 text-3xl" :"text-green-600 text-3xl" }`}>{a === "devam" ? "hello" :"xyz"}</h2>
      <button onClick={()=>b("person") } className="px-5 py-3 bg-slate-400">Click</button>
      <h3 className="text-white">{a}</h3>
      <h3 className="text-white">{a}</h3>
    </div>
    <h1 className="text-white">{a}</h1>
     <h1>{`${1+1}`}</h1>
     

    </>
  
  );
}

export default App;

import { useState  ,useEffect, useCallback, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const [numbers, setnumbers] = useState(false);
  const [character, setchar] = useState(false);
  const [password, setpassword] = useState("basic");
  const passref = useRef();

  const passwordgenerator  = useCallback( ()=>{
    let pass = ""
    let strpass = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbers) {
      strpass+="0123456789";
    }
    if (character) {
      strpass +="~`!@#$%^&*-=+(){}[]"
    }
    for (let index = 0; index < length; index++) {
      const i = Math.floor(Math.random() * strpass.length)
      console.log(i  + " "+ strpass[i]) 
      pass +=strpass[i]
    }
    setpassword(pass)
   
  },[length,numbers ,character , setpassword]);
  console.log(numbers , character)
  // this is used when any changes happen to the variables (dependencies) then it call the function
  useEffect( ()=>{
    passwordgenerator()
  } , [length ,numbers , character])

const copyToClipboard = () => {
  //passref.current?.select(); // Select the text within the input field
  window.navigator.clipboard.writeText(password);
  // to select only few portion
  passref.current.setSelectionRange(0, length); 

  };
  return (
    <>

  <div className="max-w-md mx-auto text-">
    <div className="mb-4 ">
      <label htmlfor="inputBox" className="block text-gray-400 font-bold mb-2">Input Box:</label>
      <input id="inputBox" ref={passref}  type="text" className=" bg-white text-2xl shadow appearance-none border-none rounded w-full py-3 px-4  leading-tight focus:outline-none focus:shadow-outline" value={password} readOnly/>
      <button id="copyButton"  onClick ={copyToClipboard} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Copy</button>
    </div>

    
    <div className="mb-4">
      <label for="slider"  class="block text-gray-700 font-bold mb-2">Slider:</label>
      <input id="slider" type='range' min="1" max="100" className="slider appearance-none w-full h-2 bg-gray-200 rounded outline-none" value={length} onChange={(e)=>{setlength(e.target.value)}}/>
    </div>
    <label className=' text-pink-700'>Length :{length} </label>

    <div className="flex items-center mb-4">
      <input  id="checkbox1" type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" onChange={()=>{setnumbers(!numbers)}}  />
      <label for="checkbox1" className="ml-2 text-pink-700" >Numbers</label>
    </div>
    <div className="flex items-center">
      <input id="checkbox2" type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" onChange={()=>{setchar(!character)}}/>
      <label for="checkbox2" className="ml-2 text-pink-700">Characters</label>
    </div>

  </div>
    </>
  )
}

export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [red, setred] = useState(50)
  const [green, setgreen] = useState(100)
  const [blue, setblue] = useState(200)

  const setvalue = (e)=>{
    const { name, value } = e.target;
    switch (name) {
      case 'red':
        setred(value)
        break;
      case 'green':
        setgreen(value)
      break;
      case 'blue':
        setblue(value);
      break;
      default:
        break;
    }
  }
  let colorStyle = {
    backgroundColor: `rgb(${red}, ${green}, ${blue})`
  };
  let colorred = {
    backgroundColor: `rgb(${red}, 0, 0)`
  }
  let colorgreen = {

    backgroundColor: `rgb(0, ${green}, 0)`
  }
  let colorblue = {
  backgroundColor: `rgb(0, 0,${blue})`
  }
  return (
    <>
      <div className="h-20 flex justify-center items-center" style={colorStyle}></div>
      <div  className="text-white text-center"></div>
      <h1>Color Picker</h1>
      <div id='box' className=''></div>
      <input style={colorred} type="range" name="red" id="red" min="0" max="255" onChange={setvalue}  className="slider" value={red} />
      <br />
      <input style={colorgreen} type="range" name="green" id="green" min="0" max="255" value={green} onChange={setvalue} className="slider"/>
      <br />
      <input style={colorblue} type="range" name="blue" id="blue" min="0" max="255"value={blue} onChange={setvalue} className="slider"/>
      <div className="h-20 flex justify-center items-center" style={colorStyle}></div>
    </>
  )
}

export default App;

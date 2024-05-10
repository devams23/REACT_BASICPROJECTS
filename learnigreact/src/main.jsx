import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// const customel = React.createElement(
//     'a' ,
//     {
//         href :'https://youtube.com',
//         target: '_blank'
//     },
//     'Youtube'
// )
// const new_el = (
//     <h1>Hey , what's up!</h1>
// )
//the function createelement takes in the parameters and this is converted like this when a component is rendered 

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
    <App />
  </React.StrictMode>,
)

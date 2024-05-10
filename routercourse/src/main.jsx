import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import {Home ,About, Contact , User , githubinfoloader} from './components'
import './index.css' 

// this is one way to set the routes
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children:
//       [{
//         path:"",
//         element:<Home/>,
//       },
//         {
//         path:"about",
//         element:<About/>
//       } ,
//       {
//         path:"contact" ,
//         element:<Contact/>
//       }]
//     }
// ])

// this is another way .. it increases the readability 
// the loader thing used below is for optimization
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}>
          <Route path='hello' element={<User/>} />
      </Route>
      <Route path='user/:username' loader={githubinfoloader} element={<User/>}/>
      <Route path='user/username' loader={githubinfoloader} element={<User/>}/>
      <Route loader={githubinfoloader} path='github' element={<User/>}/>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

import { useEffect, useState } from 'react'
import Card from './components/Card'
import {ThemeProvider} from './context/theme'
import Themebtn from './components/Themebtn'


function App() {
  const [thememode, setthememode] = useState("dark")
  console.log("app")
  const lightmode = ()=>{
    
    setthememode("light")
  }
  const darkmode = ()=>{
    setthememode("dark")
  }
  useEffect(() => {
    document.querySelector('html').classList.remove("light" , "dark")
    document.querySelector('html').classList.add(thememode)
  }, [thememode])
  // IN LOGIN WE SEND THE DATA to the context AND IN PROFILE.jsx WE RECEIVE THE DATA WHAT WE SEND IN LOGIN
  return (   
        <ThemeProvider value={{thememode , lightmode , darkmode}}>
            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4 ">
                        <Themebtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
        </ThemeProvider>

  )
}

export default App
 
import Usercontext from "./Usercontext";

import React, {useState } from 'react'


function UsercontextProvider({children}) {
    console.log("usercontextprovi");
    const [user , setuser ] = useState(null)
    //console.log(children)
  return (
    <Usercontext.Provider value={{user ,setuser }}>
       {children}
    </Usercontext.Provider>
  )
}

export default UsercontextProvider
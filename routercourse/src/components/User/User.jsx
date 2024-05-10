import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'
function User() {
    const data = useLoaderData();
    const {username} = useParams();
    // const [data , setdata] = useState([]);
    // fetch(`https://api.github.com/users/${username}`)
    // .then(res => res.json())
    // .then(res => setdata(res))
  return (
    <>
      <div className='bg-slate-300'>

        <div className='text-center'>User: devams23 </div>
        <div className='text-center'>User: {username || "de"}</div>
        {/* <div className='text-center'>Github Folowers: {data.followers} </div>
        <img src={data.avatar_url} alt="Github-profilepic" width={200} /> */}
      </div>
    </>
  )
}

export default User

export const githubinfoloader = async()=>{
  const res = await fetch('https://api.github.com/users/devams23')
  return res.json();
}
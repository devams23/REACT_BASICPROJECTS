import React , {useState} from 'react'
import {useDispatch} from 'react-redux';
import {addtodo } from "../features/todo/todoSlice"

function Addtodo() {

  const [todo, settodo] = useState(" ");
  const dispatch = useDispatch();
  const add =(e)=>{
    e.preventDefault();
    dispatch(addtodo(todo))
    settodo(" ")
  }
  return (
    <form onSubmit={add} className="flex">
    <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        onChange={(e)=>{settodo(e.target.value)} }
        value={todo}
        
        
    />
    <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0" >
        Add
    </button>
</form>
  )
}

export default Addtodo;
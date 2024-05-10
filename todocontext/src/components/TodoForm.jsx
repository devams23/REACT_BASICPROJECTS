import { useState , useEffect } from "react";
import { useTodo } from "../context/todocontext";

function TodoForm() {
    
    const [todo , settodo] = useState("");
    
    const {addtodo} = useTodo();
    const add = (e)=>{
        e.preventDefault()
        if (todo.length > 0) {
        addtodo({todo , comleted:false})
        settodo("");
        console.log("hell")
        }

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
    );
}

export default TodoForm;


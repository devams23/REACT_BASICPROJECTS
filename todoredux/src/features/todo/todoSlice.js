import { createSlice , nanoid } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
    todos:[
        {
            id:1,
            title: "hello",
        }
    ],

}

export const todoSlice = createSlice({
    name :'todo',
    initialState,
    reducers:{
        addtodo : (state , action)=>{
            // here state represent to the data in the initial state , current scenario
            // and action are the parameters that are required for the function to be meaningful
            const todo = {
                id : nanoid(),
                title : action.payload,
            }
            state.todos.push(todo)
        },
        removetodo:(state,action)=>{
            const id = action.payload
            console.log("hello")
            console.log(state.todos[0].id)
            state.todos = state.todos.filter((todo)=> todo.id!==id);
        },
        updatetodo:(state,action)=>{
            const {id , title} = action.payload;
            state.todos.map((todo)=>todo.id == id ? title : todo.title )
        }

    }
});
export const {addtodo , removetodo ,updatetodo} = todoSlice.actions
export default todoSlice.reducer;


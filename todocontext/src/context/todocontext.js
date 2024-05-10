import { createContext, useContext } from "react";

export const todocontext = createContext({
    todos :[
        {
           id : 1  ,
           title : "someword",
           completed : false, 
        },
    ] ,
    addtodo:    (todo)=>{},
    updatetodo: (id , todo)=>{},
    deletetodo: (id)=>{},
    toggletodo : (id)=>{},
});

export const Todoprovider = todocontext.Provider;

export const useTodo = ()=>{
    return useContext(todocontext)
}
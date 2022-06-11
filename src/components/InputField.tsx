import React from 'react'
import './Input.css'

interface Prop{
    Todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e:React.FormEvent)=>void;
}
const InputField= ({Todo,setTodo,handleAdd} :Prop) => {

    const inputChangeHandler=(e:any)=>{
        setTodo(e.target.value)

    }
    

    
  return ( 
    <form onSubmit={handleAdd} className='input'>
   <input type='text' placeholder='Enter your task' className='input-field' value={Todo} onChange={inputChangeHandler}/> 
   <button className='input_submit'>Go</button>
    </form  >
  )
}

export default InputField

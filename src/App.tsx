import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import ToDo from './components/toDo';

export interface Todos
{
  id:number;
  Todos:string;
  isDone:boolean
}

const App:React.FC=()=> {
  const[To,setTodo]=useState("")
  const[Todos,setTodos]=useState<Todos[ ]>([]) 

  const handleAdd=(e:React.FormEvent)=>{
        e.preventDefault()    
      if(Todos){
        setTodos([...Todos,{id:Date.now(),Todos:To,isDone:false}])
      }
        setTodo("")
  }
  
  return (
    
    
    <div className='App'>
      <div className='header'>Taskify</div>
      <InputField Todo={To} setTodo={setTodo} handleAdd={handleAdd}/>
      <ToDo todos={Todos} setTodos={setTodos} />
    </div>
    
    
  );
}

export default App;




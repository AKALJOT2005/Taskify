import React from 'react'
import {Todos} from '../App'
import SingleTodo from '../components/SingleTodo'
import './Todo.css'

interface Props{
    todos:Todos[];
    setTodos:React.Dispatch<React.SetStateAction<Todos[]>>;
}


 const ToDo:React.FC <Props>= ({todos,setTodos}) => {


  return ( 
    <div className='TodoList'>
     
      {todos.map((todo)=>(
        <SingleTodo
        todo={todo}
        key={todo.id}
        setTodo={setTodos}
        todos={todos}
        />))}
    </div>
  ) 
}

export default ToDo
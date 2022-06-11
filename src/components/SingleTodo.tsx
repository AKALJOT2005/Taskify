    import React from 'react';
    import {Todos} from '../App';
    import DoneIcon from '@mui/icons-material/Done';
    import EditIcon from '@mui/icons-material/Edit';
    import DeleteIcon from '@mui/icons-material/Delete';
    import './Todo.css'
import { useState } from 'react';
    
interface IProps{
    todo:Todos;
    todos:Todos[];
    setTodo:React.Dispatch<React.SetStateAction<Todos[]>>;
}



const SingleTodo :React.FC<IProps>= ({todo,todos,setTodo}) => {
    const[edit,setEdit]=useState(false)
    const[editTodo,setEditTodo]=useState<string>(todo.Todos) 

    const handleDone=(id:number)=> {
        setTodo(todos.map((todo)=>
        todo.id === id ? {...todo , isDone:  !todo.isDone }:todo))
    }
    
    const handleDelete=(id:number)=>{
        setTodo(todos.filter((todo)=>todo.id!==id))
    }

    const handleEdit=(e:React.FormEvent,id:number)=>{
        e.preventDefault();
        setTodo(todos.map((todo)=>todo.id===id?{...todo ,Todos:editTodo}:todo))
        setEdit(false)
    }

  return (
<form className='single_todo' onSubmit={(e)=>handleEdit(e,todo.id)}>

    {edit?(
        <input type="text"
        value={editTodo}
        onChange={(e)=>setEditTodo(e.target.value)} 
        className="Todo-EditList"/>
    ):(
        todo.isDone?(
            <s className='todo_text'>{todo.Todos}</s>
            )
            :(
            <span className='todo_text'>{todo.Todos}</span>
            )
    )}

   

    <div>   
        <span onClick={()=>handleDone(todo.id)} className='single-icons'>
        <DoneIcon/>
        </span>
        <span onClick={()=> {if(!edit && !todo.isDone){
            setEdit(!edit)
        }} }
        className='single-icons'>
        <EditIcon/>
        </span>
        <span onClick={()=> handleDelete(todo.id)} className='single-icons'>
        <DeleteIcon/>
        </span>
    </div>
</form>




  )
}

export default SingleTodo
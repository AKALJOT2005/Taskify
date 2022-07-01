    import React, { FormEvent } from 'react';
    import {Todos} from '../App';
    import DoneIcon from '@mui/icons-material/Done';
    import EditIcon from '@mui/icons-material/Edit';
    import DeleteIcon from '@mui/icons-material/Delete';
    import './Todo.css'
    import {  selectCurrent } from '../redux/features/checklistSlice';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import {AddCheckvalue} from '../redux/features/checklistSlice';
import {useDispatch} from 'react-redux'
import ToDo from './toDo';
import { List } from '@mui/material';
import { Type } from 'typescript';

    
interface IProps{
    todo:Todos;
    todos:Todos[];
    setTodo:React.Dispatch<React.SetStateAction<Todos[]>>;
}



const SingleTodo :React.FC<IProps>= ({todo,todos,setTodo}) => {

    const valueme=todo.Todos;
    const Data:any=[]
    const CurrentCheck=useSelector(selectCurrent)
    const Dispatch=useDispatch();
    
    const[edit,setEdit]=useState(false)
    const[editTodo,setEditTodo]=useState<string>(todo.Todos) 

    
    const handleDone=(id:number,e:any)=> {
        setTodo(todos.map((todo)=>
        todo.id === id ? {...todo , isDone:  !todo.isDone }:todo));
        (Dispatch(AddCheckvalue(todo.Todos)));   

    }

    

    
    const handleDelete=(id:number)=>{
        setTodo(todos.filter((todo)=>todo.id!==id))
       
        
    }

    const handleEdit=(e:React.FormEvent,id:number)=>{
        e.preventDefault();
        setTodo(todos.map((todo)=>todo.id===id?{...todo ,Todos:editTodo}:todo))
        setEdit(false)
        
    }
   if (todo.isDone) {
    return null
   }
  return (
<form className='single_todo' onSubmit={(e)=>handleEdit(e,todo.id)}>

    {edit?(
        <input type="text"
        value={editTodo}
        onChange={(e)=>setEditTodo(e.target.value)} 
        className="Todo-EditList"/>
    ):(
        
            <span className='todo_text'>{todo.Todos}</span>
        
    )}
    

   

    <div>   
        <span onClick={(e)=>handleDone(todo.id,e)} className='single-icons'>
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
)}


export default SingleTodo
import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import ToDo from './components/toDo';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import {useSelector} from 'react-redux';
import checklistSlice from './redux/features/checklistSlice';
import {AddCheckvalue} from './redux/features/checklistSlice';
import { useDispatch } from 'react-redux';
import {  selectCurrent } from './redux/features/checklistSlice';
import { Check } from '@material-ui/icons';
import DeleteIcon from '@mui/icons-material/Delete';



export interface Todos
{
  id:number;
  Todos:string;
  isDone:boolean
}

const App:React.FC=()=> {

  const dispatch=useDispatch();
  


const head = useSelector((state:any)=> state.myHead.head)  
  const CurrentCheck=useSelector(selectCurrent)
  const [enlarge,setenlarge]=useState<boolean>(false)
  const[To,setTodo]=useState("")
  const[Todos,setTodos]=useState<Todos[ ]>([]) 

  const handleAdd=(e:React.FormEvent)=>{
        e.preventDefault()    
      if(Todos){
        setTodos([...Todos,{id:Date.now(),Todos:To,isDone:false}])
      }
        setTodo("")
  }
   
  const ChecklistTask=()=>{
    setenlarge(!enlarge)
  }

  
 
  return (
    
    
    <div className='App'> 
      
      <div className='completedTask' onClick={ChecklistTask}>
      <BookmarkAddedIcon
      fontSize="large"/>     
      </div>

    
      {(enlarge) &&
      
        <div className='checkList'>        
      { CurrentCheck.map(a => <p key={a.Value}><li>{a.Value} <div className="icon"><DeleteIcon/></div> </li></p> )}
        </div>
      
     }
      
     
      <div className='header'>Taskify</div>
      

      <InputField Todo={To} setTodo={setTodo} handleAdd={handleAdd}/>
      <ToDo todos={Todos} setTodos={setTodos} />

      
    </div>
    
    
  );

  
}



export default App;




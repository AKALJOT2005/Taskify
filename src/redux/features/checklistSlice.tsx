import { Store } from "@material-ui/icons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { storring } from "../store";

type Object= {
value:String;
id:Number|String;
}
interface checkMyValue{
   Value:string;

};
interface initialStateProp{ 
checkValue:Array<checkMyValue>
}

const initialState:initialStateProp={
   checkValue:[],
}

 const checkListSlice =  createSlice({
    name:"checkList",
    initialState,
     reducers:{
      AddCheckvalue:(state,action:PayloadAction<string>)=>{
         state.checkValue=[...state.checkValue,{Value:action.payload,}]     
      },
     }
}) 

type RootState=ReturnType<typeof storring.getState>;

export const selectCurrent=(state:RootState)=>state.myHead.checkValue;
export default checkListSlice.reducer;
export const  {AddCheckvalue} =checkListSlice.actions;
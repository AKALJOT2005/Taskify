import { configureStore } from '@reduxjs/toolkit'
import checklistReducer from './features/checklistSlice'

export const storring= configureStore({
    reducer:{
        myHead:checklistReducer,
    },
});
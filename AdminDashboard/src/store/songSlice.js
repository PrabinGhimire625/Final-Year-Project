import { createSlice } from "@reduxjs/toolkit";
import {STATUS} from "../globals/components/Status"

const songSlice=createSlice({
    name:"song",
    initialState:{
        song:[],
        status:STATUS.LOADING
    },
    reducers:{
        setSong(state,action){
            state.song=action.payload
        },
        setStatus(state,action){
            state.status=action.payload
            console.log(state.status)
        }
    }
})

export const {setSong,setStatus}=songSlice.actions
export default songSlice.reducer



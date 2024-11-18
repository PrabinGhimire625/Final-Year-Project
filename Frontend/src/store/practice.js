import { createSlice } from "@reduxjs/toolkit";
import { setUserData } from "./authSlice";

const authSlice= createSlice({
    name:"auth",
    initialState:{
        data:[]
    },
    reducers:{
        setUserData(state,action){
            state.data=action.payload

        }
    }

})

export const {setUserData}=authSlice.actions
export default authSlice.reducer


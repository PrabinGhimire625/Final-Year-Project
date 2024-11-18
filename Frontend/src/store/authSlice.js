import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../globals/components/enumStatus/Status";
import { API } from "../http";

const authSlice=createSlice({
    name:"auth",
    initialState:{
        data:[],
        status : STATUS.LOADING
    },
    reducers:{
        setUserData(state,action){
            state.data=action.payload
        },
        setStatus(state,action){
            state.status=action.payload
        },
        resetStatus(state){
            state.status=STATUS.LOADING
        },
    }
})

export const {setUserData,setStatus,resetStatus}=authSlice.actions
export default authSlice.reducer

//signup
export function register(data){
    return async function registerUserThunk(dispatch){
        dispatch(setStatus(STATUS.LOADING));
        try{
            const response=await API.post("/api/user/register",data);
            if(response.status===200){
                dispatch(setStatus(STATUS.SUCCESS));
            }
        }catch(err){
            dispatch(setStatus(STATUS.ERROR));
        }
    }
}

//login
export function login(data){
    return async function loginThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING));
        try{
            const response=await API.post("/api/user/login",data);
            if(response.status===200){
                dispatch(setStatus(STATUS.SUCCESS));
            }else{
                dispatch(setStatus(STATUS.ERROR));
            }
        }catch(err){
            console.error("Error : ", err);
            dispatch(setStatus(STATUS.ERROR));
        }  
    }
}
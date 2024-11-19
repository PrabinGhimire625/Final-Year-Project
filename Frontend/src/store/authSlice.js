import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../globals/components/enumStatus/Status";
import { API } from "../http";

const authSlice=createSlice({
    name:"auth",
    initialState:{
        data:[],
        status : STATUS.LOADING,
        token:"",
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
        setToken(state,action){
            state.token=action.payload;
            console.log(state.token)
        }
    }
})

export const {setUserData,setStatus,resetStatus,setToken}=authSlice.actions
export default authSlice.reducer

//signup
export function register(data){
    return async function registerUserThunk(dispatch){
        dispatch(setStatus(STATUS.LOADING));
        try{
            const response=await API.post("/api/user/register",data);
            console.log(response)
            console.log(data)
            if(response.status===200){
                dispatch(setStatus(STATUS.SUCCESS));
            }else{
                dispatch(setStatus(STATUS.ERROR));
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
                const {token,data}=response.data;
                console.log(token)
                console.log(data)
                dispatch(setStatus(STATUS.SUCCESS));
                dispatch(setToken(token));
                localStorage.setItem('token',token);
            }else{
                dispatch(setStatus(STATUS.ERROR));
            }
        }catch(err){
            console.error("Error : ", err);
            dispatch(setStatus(STATUS.ERROR));
        }  
    }
}
import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../globals/enumStatus/Status";
import { API, APIAuthenticated } from "../http/index";

const authSlice=createSlice({
    name:"auth",
    initialState:{
        data:[],
        status:STATUS.LOADING,
        token:"",
        profile:""
    },
    reducers : {
        setUserdata(state,action){
            state.data=action.payload
            console.log(state.data)
        },
        setStatus(state,action){
            state.status=action.payload
            console.log(state.status)
        },
        resetStatus(state){
            state.status=STATUS.LOADING
        },
        setToken(state,action){
            state.token=action.payload;
            console.log(state.token);
        },
        setProfile(state,action){
            state.profile=action.payload          
        }
    }
})

export const {setUserdata,setStatus, resetStatus,setToken,setProfile}=authSlice.actions
export default authSlice.reducer

//login user
export function login(data){
    return async function loginThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING));
        try{
            const response=await API.post("/api/user/login",data);
            if(response.status===200){
                const {token,data}=response.data;
                console.log(data);
                console.log(token);
                dispatch(setStatus(STATUS.SUCCESS));
                dispatch(setUserdata(data));
                dispatch(setToken(token));
                localStorage.setItem('token',token);
            }else{
                dispatch(setStatus(STATUS.ERROR));
            }
        }catch(err){
            console.log(err);
            dispatch(setStatus(STATUS.ERROR));
        }  
    }
}

//user profile
export function userProfile(){
    return async function userProfileThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING));
        try{
            const response=await APIAuthenticated.get("/api/user/profile");
            console.log(response);
            if(response.status===200){
                const {data}=response.data;
                console.log(data);
                dispatch(setProfile(data));
                dispatch(setStatus(STATUS.SUCCESS));  
            }else{
                dispatch(setStatus(STATUS.ERROR));
            }
        }catch(err){
           console.log(err);
            dispatch(setStatus(STATUS.ERROR));
        }  
    }
}



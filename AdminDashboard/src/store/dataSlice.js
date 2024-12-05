import { createSlice } from "@reduxjs/toolkit";
import {STATUS} from "../globals/enumStatus/Status"
import { API } from "../http/index";

const dataSlice=createSlice({
    name:"data",
    initialState:{
        users:[],
        status:STATUS.LOADING
    },
    reducers:{
        setUserData(state,actions){
            state.users=actions.payload
        },
        setStatus(state,actions){
            state.status=actions.payload

        }
    }
})

export const {setUserData,setStatus}=dataSlice.actions;
export default dataSlice.reducer

//fetch all the user
export function fetchAllUser(){
    return async function fetchAllUserThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING))
        try{
            const response=await API.get("/api/user")
            console.log(response)
            if(response.status===200){
                const {data}=response.data
                console.log(data)
                dispatch(setUserData(data))
                dispatch(setStatus(STATUS.SUCCESS))
            }else{
                dispatch(setStatus(STATUS.ERROR))
            }
        }catch(err){
            console.log(err)
            dispatch(setStatus(STATUS.ERROR))
        }
    }
}

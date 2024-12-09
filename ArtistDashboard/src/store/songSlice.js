import { createSlice } from "@reduxjs/toolkit";
import {STATUS} from "../globals/components/Status"
import {API} from "../http/index"
const songSlice=createSlice({
    name:"song",
    initialState:{
        song:[],
        status:STATUS.LOADING,
        singleSong:null
    },
    reducers:{
        setSong(state,action){
            state.song=action.payload
        },
        setStatus(state,action){
            state.status=action.payload
            console.log(state.status)
        },
        setSingleSong(state,action){
            state.singleSong=action.payload
        },
        setDeleteSong(state,action){
            const index=state.song.findIndex(songs=>songs._id=action.payload.songId)
            state.song.splice(index,1)
        },
        setUpdateSong(state, action) {
            const index = state.song.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.song[index] = {
                    ...state.song[index], 
                    ...action.payload.songData 
                };
            }
        },
        setUpdateSongById(state,action){
            const index=state.song.findIndex(item=>item.id===action.payload.id)
            if(index!==-1){
                
            }

        }
    }
})

export const {setSong,setStatus,setSingleSong,setDeleteSong,setUpdateSong}=songSlice.actions
export default songSlice.reducer


//add song
// export function addSong(songData){
//     return async function addSongThunk(dispatch) {
//         dispatch(setStatus(STATUS.LOADING));
//         try{
//             const response= await API.post("/api/song", {songData},{
//                 headers:{
//                     "Content-Type" : "multipart/form-data"
//                 }
//             })
//             if(response.status===200){
//                 dispatch(setStatus(STATUS.SUCCESS));
//             }else{
//                 dispatch(setStatus(STATUS.ERROR));
//             }
//         }catch(err){
//             dispatch(setStatus(STATUS.ERROR));
//         } 
//     }
// }


//list all the songs
export function listAllSong(){
    return async function listAllSongThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING));
        try{
        const response=await API.get("/api/song");
        if(response.status===200){
            const {data} =response.data;
            dispatch(setSong(data));
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

//list the single song
// export function listSingleSong(id){
//     return async function listSingleSongThunk(dispatch) {
//         dispatch(setStatus(STATUS.LOADING));
//         try{
//         const response=API.get(`/api/song/${id}`);
//         if(response.status===200){
//             const {data} =response.data;
//             dispatch(setSingleSong(data));
//             dispatch(setStatus(STATUS.SUCCESS));
//         }
//         else{
//             dispatch(setStatus(STATUS.ERROR));  
//         }
//         }catch(err){
//         dispatch(setStatus(STATUS.ERROR));  
//         }  
//     }
// }

//delete the song
export function deleteSong(songId){
    return async function deleteSongThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING));
        try{
        const response=await API.delete(`/api/song/${songId}`);
        console.log(response);
        if(response.status===200){
            dispatch(setDeleteSong({songId}));
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
import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../globals/components/Status";
import {API} from "../http/index"

const albumSlice = createSlice({
    name: "album",
    initialState: {
        albums: [], 
        singleAlbum: null, 
        status: STATUS.LOADING,
    },
    reducers: {
        setAlbumData(state, action) {
            state.albums = action.payload;
        },
        setSingleAlbum(state, action) {
            state.singleAlbum = action.payload; // Added for single album
        },
        setStatus(state, action) {
            state.status = action.payload;
        },
        setDeleteAlbum(state,action){
            const index=state.albums.findIndex(album=>album._id=action.payload.albumId)
            state.albums.splice(index,1)
        }
    },
});

export const { setAlbumData, setSingleAlbum, setStatus,setDeleteAlbum } = albumSlice.actions;
export default albumSlice.reducer;

// Add a new album
export function addAlbum(albumData) {
    return async function addAlbumThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING));
        try {
            const response = await API.post("/api/album", albumData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log(response)

            if (response.status === 200) {
                dispatch(setStatus(STATUS.SUCCESS));
            } else {
                dispatch(setStatus(STATUS.ERROR));
            }
        } catch (err) {
            console.error(err);
            dispatch(setStatus(STATUS.ERROR));
        }
    };
}

//List all albums
export function listAllAlbum() {
    return async function listAllAlbumThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING));
        try {
            const response = await API.get("/api/album");
            if (response.status === 200) {
                const { data } = response.data;
                dispatch(setAlbumData(data));
                dispatch(setStatus(STATUS.SUCCESS));
            } else {
                dispatch(setStatus(STATUS.ERROR));
            }
        } catch (err) {
            console.error(err);
            dispatch(setStatus(STATUS.ERROR));
        }
    };
}

//Fetch a single album
export function listSingleAlbum(albumId) {
    return async function listSingleAlbumThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING));
        try {
            const response = await API.get(`/api/album/${albumId}`);
            console.log(response)
            if (response.status === 200) {
                const { data } = response.data;
                dispatch(setSingleAlbum(data));
                dispatch(setStatus(STATUS.SUCCESS));
            } else {
                dispatch(setStatus(STATUS.ERROR));
            }
        } catch (err) {
            console.error(err);
            dispatch(setStatus(STATUS.ERROR));
        }
    };
}

//Fetch a single album
export function deleteAlbum(albumId) {
    return async function deleteAlbumThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING));
        try {
            const response = await API.delete(`/api/album/${albumId}`);
            if (response.status === 200) {
                dispatch(setDeleteAlbum({albumId}));
                dispatch(setStatus(STATUS.SUCCESS));
            } else {
                dispatch(setStatus(STATUS.ERROR));
            }
        } catch (err) {
            console.error(err);
            dispatch(setStatus(STATUS.ERROR));
        }
    };
}

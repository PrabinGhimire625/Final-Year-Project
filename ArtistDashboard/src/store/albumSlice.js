import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../globals/components/Status";
import { API } from "../http/index";

const albumSlice = createSlice({
    name: "album",
    initialState: {
        albums: [], // Renamed for consistency
        singleAlbum: null, // Added for fetching single album details
        status: STATUS.IDLE, // Updated default status
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
    },
});

export const { setAlbumData, setSingleAlbum, setStatus } = albumSlice.actions;
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

// List all albums
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

// Fetch a single album
export function listSingleAlbum(id) {
    return async function listSingleAlbumThunk(dispatch) {
        dispatch(setStatus(STATUS.LOADING));
        try {
            const response = await API.get(`/api/album/${id}`);
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

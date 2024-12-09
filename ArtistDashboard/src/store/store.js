import {configureStore} from "@reduxjs/toolkit"
import songSlice from "./songSlice"
import albumSlice from "./albumSlice"

const store=configureStore({
    reducer:{
        song: songSlice,
        album:albumSlice,
    }
})

export default store
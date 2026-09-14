import { configureStore } from "@reduxjs/toolkit";
import songsReducer from "./reducers"

const store = configureStore({
    reducer: songsReducer
})

export default store
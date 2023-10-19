import { configureStore } from "@reduxjs/toolkit";
import whishlistSlice from "./slices/whishlistSlice";

const store = configureStore({
    reducer:{
        whishlistReducer : whishlistSlice

    }
})


export default store;
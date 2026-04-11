import { configureStore } from "@reduxjs/toolkit";
import appReducer from './appslice'
import galleryReducer from './galleryslice'

export const store = configureStore({
    reducer:{
        modal: appReducer,
        gallery:galleryReducer,

    }
})
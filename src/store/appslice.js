import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isOpen: false,
    title: ''
}

export const appSlice = createSlice({
    name:'modal',
    initialState,
    reducers:{
        openTypeModal:(state,action)=>{
            state.isOpen = true,
            state.title = action.payload
        },
        closeModal:(state)=>{
            state.isOpen = !state.isOpen
        }
    }
})

export const {openTypeModal,closeModal} = appSlice.actions
export default appSlice.reducer
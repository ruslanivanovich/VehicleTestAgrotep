import { createSlice } from "@reduxjs/toolkit";
import vehicles from "../../public/vehicles";
const initialState = {
    activeIndex: null,
    filteredVehicle:null,
}

export const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers: {
        filteredVehicle :(state,action)=>{
            state.filteredVehicle = vehicles.find(v => v.id === +action.payload)
        },
        nextIndex: (state) => {
            state.activeIndex = state.activeIndex === state.filteredVehicle.gallery.length - 1 ? 0 : state.activeIndex + 1
        },
        prevIndex: (state) => {
           state.activeIndex =  state.activeIndex === 0 ? state.filteredVehicle.gallery.length - 1 : state.activeIndex - 1
        },
        deleteImg: (state, action) => {
            const updatedGallery = state.filteredVehicle.gallery.filter(g => g.id !== action.payload)
            state.filteredVehicle.gallery = updatedGallery
        },
        setActiveIndex:(state,action)=>{
            state.activeIndex = action.payload


        }

    }
})

export const {nextIndex,prevIndex,deleteImg,filteredVehicle,setActiveIndex} = gallerySlice.actions
export default gallerySlice.reducer
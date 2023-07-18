import { createSlice } from "@reduxjs/toolkit";

export const sideBarSlice = createSlice({
    name:"Sidebar",
    initialState:{
        isVisible : true      
    },
    reducers:{
        clicked:(state,action)=>{
            state.isVisible= !state.isVisible;
        },
        closeSideBar:(state,action)=>{
            state.isVisible = false;
        }
    }
})

export const {clicked, closeSideBar} = sideBarSlice.actions;
export default sideBarSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name:"chatSlice",
    initialState:{
        chat :[]
    },
    reducers:{
        updateChats:(state,action)=>{
            state.chat.splice(15,1);
            state.chat.unshift(action.payload);
        }
    }
})

export const {updateChats} = chatSlice.actions;
export default chatSlice.reducer;
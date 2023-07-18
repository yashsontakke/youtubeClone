import {createSlice} from '@reduxjs/toolkit';

export const videosSlice = createSlice({
    name : "videoSlicer",
    initialState :{
        searchedword : "",
        navigate : true 
    },
    reducers:{
        updateResults:(state,action)=>{
            state.searchedword = action.payload;
            state.navigate = !state.navigate;
        }
    }
})

export const {updateResults} = videosSlice.actions;
export default videosSlice.reducer;
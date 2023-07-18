import { configureStore } from '@reduxjs/toolkit'
import sideBarReducer from './sideBarSlice'
import videosSlice from './videosSlice'
import chatSlice from './chatSlice'

export const store = configureStore({
    reducer:{
        Sidebar : sideBarReducer,
        videos: videosSlice ,   // this videos name should be in useSelector 
        chat :chatSlice
    }
})


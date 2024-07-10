import { configureStore } from "@reduxjs/toolkit";
import authSlice from './authSlice'

const store = configureStore({
    reducer: {
        name: 'authSlice'
    }
})

export default store;
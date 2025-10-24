import { configureStore } from "@reduxjs/toolkit";
import userReducer from './Slice'
const store=configureStore({
    reducer:{
        globalData:userReducer
    }
});

export default store;
import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "./ChatSlice";

const chatStore = configureStore({
    reducer:{
        chatReducer : chatSlice
    }
})

export default chatStore
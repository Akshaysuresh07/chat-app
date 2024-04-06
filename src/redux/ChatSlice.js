import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name:"chat",
    initialState:[],
    reducers:{
        addmsg: (state, action) => {
            state.push(action.payload)
        },
    }
})

export const { addmsg } = chatSlice.actions;
export default chatSlice.reducer;
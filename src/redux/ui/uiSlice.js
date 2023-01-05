import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    winWidth: window.innerWidth,
    winHeight: 0
}
const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers:{
        setWinWidth(state, action){
            state.winWidth = action.payload
        }
    }
})

export default uiSlice.reducer
export const { setWinWidth } = uiSlice.actions
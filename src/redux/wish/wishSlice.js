import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishList: []
}

const wishSlice = createSlice({
    name: "wish",
    initialState,
    reducers: {
        addToWishList(state, action){
            if(state.wishList.find((product)=>product.id === action.payload.id)){
                state.wishList = state.wishList.filter(product => action.payload.id !== product.id)
            }
            else{
                state.wishList.push(action.payload)
            }
        }
    }
})

export default wishSlice.reducer
export const {addToWishList} = wishSlice.actions
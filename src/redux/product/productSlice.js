import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from '../../api'

const initialState = {
    products: [],
    searchResult: [],
    loader: false,
    error: ''
}
const fetchProducts = createAsyncThunk('product/fetchProducts', async()=>{
    const res = await api.get(`products`)    
    return await res.data
})

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        getSearchRersult(state, action){
            const searchResult = state.products.filter((product) => ((product.id).toString() === action.payload) || ((product.title).toString().includes(action.payload)) );
            state.searchResult = searchResult
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending, (state)=>{
            state.loader = true
        }).addCase(fetchProducts.fulfilled, (state, action)=>{
            state.loader = false
            state.products = action.payload
            state.searchResult = action.payload
            state.error = ''
        }).addCase(fetchProducts.rejected, (state, action)=>{
            state.loader = false
            state.products = []
            state.error = action.error.message
        })
    }   
})

export default productSlice.reducer
export const {getSearchRersult} = productSlice.actions
export {fetchProducts}
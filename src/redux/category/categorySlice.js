import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api";

const initialState = {
    categoryList: [],
    categoryProducts: [],
    catLoader: false,
    checkedState: [],
    catError: ''
}
const fetchCategoryList = createAsyncThunk('category/fetchCategoryList', async () => {
    const res = await api.get('products/categories')
    return await res.data
})
const fetchCategoryProducts = createAsyncThunk('category/fetchCategoryProducts', async (filterTerm) => {
    const res = await api.get(`products/category/${filterTerm}`)
    return await res.data
})
const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        removeFilterProducts(state, action) {
            state.categoryProducts = state.categoryProducts.filter((product) => {
                return product.category != action.payload
            })
        },
        clearFilterProducts(state) {
            state.categoryProducts = []
        },
        setCheckedState(state, action) {
            state.checkedState = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategoryList.pending, (state) => {
            state.catLoader = true
        }).addCase(fetchCategoryList.fulfilled, (state, action) => {
            state.catLoader = false
            state.categoryList = action.payload
            state.error = ''
        }).addCase(fetchCategoryList.rejected, (state, action) => {
            state.catLoader = false
            state.categoryList = []
            state.error = action.error.message
        }).addCase(fetchCategoryProducts.pending, (state) => {
            state.catLoader = true
        }).addCase(fetchCategoryProducts.fulfilled, (state, action) => {
            state.catLoader = false
            state.categoryProducts = state.categoryProducts.length ? state.categoryProducts.concat(action.payload) : action.payload
            state.error = ''
        }).addCase(fetchCategoryProducts.rejected, (state, action) => {
            state.catLoader = false
            state.categoryProducts = []
            state.error = action.error.message
        }).addCase('product/getSearchRersult', (state) => {
            state.categoryProducts = []
            state.checkedState = state.checkedState.map((item, index) => item = false)
        })
    }
})

export default categorySlice.reducer
export { fetchCategoryList, fetchCategoryProducts }
export const { removeFilterProducts, clearFilterProducts, setCheckedState } = categorySlice.actions
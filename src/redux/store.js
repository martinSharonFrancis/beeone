import cartSlice from "./cart/cartSlice";
import categorySlice from "./category/categorySlice";
import productSlice from "./product/productSlice";
import uiSlice from "./ui/uiSlice";
import wishSlice from "./wish/wishSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer:{
        product: productSlice,
        category: categorySlice,
        wish: wishSlice,
        cart: cartSlice,
        ui: uiSlice
    }
})

export default store
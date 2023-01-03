import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartProducts: []
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            let existIndex = state.cartProducts.findIndex(function (existCartProduct) {
                return existCartProduct.id == action.payload.product.id;
            });
            // console.log(existIndex);
            if (existIndex >= 0) {
                let repeatedCart = state.cartProducts[existIndex]

                let updatedNumOfItem = {
                    ...repeatedCart,
                    numberOfProducts: repeatedCart.numberOfProducts + 1
                };

                // console.log(updatedNumOfItem);
                state.cartProducts.splice(existIndex, 1, updatedNumOfItem)
            }
            else {
                // state.cartProducts.push()
                let newCart = {
                    ...action.payload.product,
                    numberOfProducts: 1
                }
                // console.log(newCart);
                state.cartProducts = [
                    ...state.cartProducts,
                    newCart
                ]
            }
        },
        removeFromCart(state, action) {
            let existIndex = state.cartProducts.findIndex(function (existCartProduct) {
                return existCartProduct.id == action.payload.product.id;
            });
            if (action.payload.type === 'complete') {
                state.cartProducts.splice(existIndex, 1)
            } else {
                let repeatedCart = state.cartProducts[existIndex]

                let updatedNumOfItem = {
                    ...repeatedCart,
                    numberOfProducts: repeatedCart.numberOfProducts > 1 ? repeatedCart.numberOfProducts - 1 : 1
                };

                // console.log(updatedNumOfItem);
                state.cartProducts.splice(existIndex, 1, updatedNumOfItem)
            }
        }
    }
})

export default cartSlice.reducer
export const { addToCart, removeFromCart } = cartSlice.actions
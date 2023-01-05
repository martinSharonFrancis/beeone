import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartProducts: [],
    total: 0,
    totalProducts: 0
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            let existIndex = state.cartProducts.findIndex(function (existCartProduct) {
                return existCartProduct.id == action.payload.product.id;
            });
            if (existIndex >= 0) {
                let repeatedCart = state.cartProducts[existIndex]

                let updatedNumOfItem = {
                    ...repeatedCart,
                    numberOfProducts: repeatedCart.numberOfProducts + 1
                };

                state.cartProducts.splice(existIndex, 1, updatedNumOfItem)
            }
            else {
                let newCart = {
                    ...action.payload.product,
                    numberOfProducts: 1
                }
                state.cartProducts = [
                    ...state.cartProducts,
                    newCart
                ]
            }

            if (state.cartProducts.length) {
                const totalPrice = state.cartProducts.reduce((total, cartProduct) => { 
                    return (parseFloat(total) + parseFloat((cartProduct.numberOfProducts * cartProduct.price))).toFixed(2)
                }, 0)
                state.total = totalPrice
                // console.log(state.total);

                state.totalProducts = state.cartProducts.reduce((total, cartProduct) => { 
                    return total + cartProduct.numberOfProducts 
                }, 0)
            }
        },
        removeFromCart(state, action) {
            let existIndex = state.cartProducts.findIndex(function (existCartProduct) {
                return existCartProduct.id == action.payload.product.id;
            });
            if (action.payload.type === 'complete') {
                if (state.cartProducts.length) {
                    state.total = (parseFloat(state.total) - parseFloat((state.cartProducts[existIndex].price * state.cartProducts[existIndex].numberOfProducts))).toFixed(2)
                    // console.log(state.total);
                    state.totalProducts = state.totalProducts - state.cartProducts[existIndex].numberOfProducts
                }
                state.cartProducts.splice(existIndex, 1)
            } else {
                let repeatedCart = state.cartProducts[existIndex]

                let updatedNumOfItem = {
                    ...repeatedCart,
                    numberOfProducts: repeatedCart.numberOfProducts > 1 ? repeatedCart.numberOfProducts - 1 : 1
                };

                //reducing the total price and total products
                state.cartProducts.splice(existIndex, 1, updatedNumOfItem)

                const totalPrice = state.cartProducts.reduce((total, cartProduct) => { 
                    return (parseFloat(total) + parseFloat((cartProduct.numberOfProducts * cartProduct.price))).toFixed(2)
                }, 0)
                const totalProducts = state.cartProducts.reduce((total, cartProduct) => { 
                    return total + cartProduct.numberOfProducts 
                }, 0)
                // console.log(totalPrice, totalProducts);
                state.total = totalPrice
                state.totalProducts = totalProducts

            }
        },
    }
})

export default cartSlice.reducer
export const { addToCart, removeFromCart } = cartSlice.actions
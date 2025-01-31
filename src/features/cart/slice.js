import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: [],
    showCart: false
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            // Retrieve action.payload.product_id and Add
        },
        removeProduct: (state, action) => {
            // Retrieve action.payload.product_id and Add
        },
        toogleShowCart: (state, action) => {
            state.showCart = !state.showCart 
        },
    },
});

export const { addProduct, removeProduct, toogleShowCart } = cartSlice.actions;
export default cartSlice.reducer;

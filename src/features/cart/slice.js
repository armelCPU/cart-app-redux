import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: [],
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
    },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;

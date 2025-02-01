import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: [],
    loading: false,
    error: null,
    filterValues: {
        category: "",
        priceMin: undefined,
        priceMax: undefined,
        search: ""
    }
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        },

        setLoading: (state, action) => {
            state.loading = action.payload
        },

        setError: (state, action) => {
            state.error = action.payload
        },

        setFilterValues: (state, action) => {
            state.filterValues = action.payload;
        }
    }
});

export const { setProducts, setLoading, setError, setFilterValues } = productsSlice.actions;
export default productsSlice.reducer;

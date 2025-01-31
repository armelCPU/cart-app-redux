import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: [],
    cartProducts: [],
    showCart: false
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            // Retrieve action.payload and Add
            const targetProduct = state.products.find(
                product => product.id === action.payload
            )

            if (! targetProduct) {
                alert("Product doesn't exists");
                return ;
            }

            const productInCart = state.cartProducts.find(
                product => product.id === action.payload
            )

            if (! productInCart){
                state.cartProducts = [... state.cartProducts, {
                    ...targetProduct,
                    quantity: 1
                }]
            } else {
                const updatedProduct = {
                    ...productInCart,
                    quantity: productInCart.quantity + 1
                }
                state.cartProducts = state.cartProducts.map( product => {
                    return product.id === updatedProduct.id ? updatedProduct : product
                });
            }
            

        },
        removeProduct: (state, action) => {
            // Retrieve action.payload and Remove
            const targetProduct = state.products.find(
                product => product.id === action.payload
            )

            if (! targetProduct) {
                alert("Product doesn't exists");
                return ;
            }

            const productInCart = state.cartProducts.find(
                product => product.id === action.payload
            )

            if (! productInCart){
                alert("Product not in cart");
                return ;
            } 

            if (productInCart.quantity === 1) {
                state.cartProducts = state.cartProducts.filter( product => {
                    return product.id !== action.payload
                });
            }

            const updatedProduct = {
                ...productInCart,
                quantity: productInCart.quantity - 1
            }
            state.cartProducts = state.cartProducts.map( product => {
                return product.id === updatedProduct.id ? updatedProduct : product
            });
            
        },
        toogleShowCart: (state, action) => {
            state.showCart = !state.showCart 
        },
        setAllProducts: (state, action) => {
            state.products = action.payload;
        },
    },
});

export const { addProduct, removeProduct, toogleShowCart, setAllProducts } = cartSlice.actions;
export default cartSlice.reducer;

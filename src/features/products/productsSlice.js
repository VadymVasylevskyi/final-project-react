import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils";

export const getProducts = createAsyncThunk(
    'products/getProducts', 
    async(thunkAPI) => {
        try {
            const res = await axios(`${API_URL}/products/all`)
            return res.data
        } catch(err) {
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
    }
)
const productsSlice = createSlice({
    name: 'products',
    initialState: {
        list: [],
        isLoading: false
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, {payload}) => {
            state.list = payload
            state.isLoading = false
        }),

        builder.addCase(getProducts.pending, (state, {payload}) => {
            state.list = payload
            state.isLoading = true
        }),
        builder.addCase(getProducts.rejected, (state, {payload}) => {
            state.list = payload
            state.isLoading = false
        })

    },
})

export default productsSlice.reducer
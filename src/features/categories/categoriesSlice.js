import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils";

export const getCategories = createAsyncThunk(
    'categories/getCategories', 
    async(thunkAPI) => {
        try {
            const res = await axios(`${API_URL}/categories/all`)
            return res.data
        } catch(err) {
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
    }
)
const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        list: [],
        isLoading: false
    },
    extraReducers: (builder) => {
        builder.addCase(getCategories.fulfilled, (state, {payload}) => {
            state.list = payload
            state.isLoading = false
        }),

        builder.addCase(getCategories.pending, (state, {payload}) => {
            state.list = payload
            state.isLoading = true
        }),
        builder.addCase(getCategories.rejected, (state, {payload}) => {
            state.list = payload
            state.isLoading = false
        })

    },
})

export default categoriesSlice.reducer
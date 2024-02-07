import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const id = localStorage.getItem("userId")

export const expenses = createAsyncThunk('expenses', async () => {
    

    const response = await axios.get(`http://localhost:8000/expense/${id}`)

    console.log(response)
    return response
})

const expenseList = createSlice ({
    name: 'expenseList',
    initialState: {
        isLoading: false,
        data: [],
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(expenses.pending, (state, action) => {
            state.isLoading =true
        }) 
        
        builder.addCase(expenses.fulfilled, (state, action) => {
            console.log(action.payload)
            state.isLoading = false;
            state.data = action.payload 
        })
        builder.addCase(expenses.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.isError = true;
        }) 
        
    }
})


export default expenseList.reducer





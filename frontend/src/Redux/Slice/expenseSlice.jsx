import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const id = localStorage.getItem("userId")
// const id = localStorage.getItem(JSON.parse('userId'));
console.log(id)
export const expense = createAsyncThunk('expense', async (input) => {
    console.log(input)
    const response = await axios.post(`http://localhost:8000/expense/${id}`, input)
    console.log(response)
    return response
})




const expenseSlice = createSlice ({
    name: 'expense',
    initialState: {
        isLoading: false,
        data: [],
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(expense.pending, (state)=> {
            state.isLoading=false
        })
        builder.addCase(expense.fulfilled, (state, action) => {
            state.isLoading=false
            state.data = []

        })
        builder.addCase(expense.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.isError = true
        })
        
    }
})


export default expenseSlice.reducer
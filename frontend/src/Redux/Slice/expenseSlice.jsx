import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const expenseSlice = createSlice ({
    name: 'expense',
    initialState: {
        isLoading: false,
        data: [],
        isError: false
    },
    extraReducers: (builder) => {
      
    }
})


export default expenseSlice.reducer
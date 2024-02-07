// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const expense = createAsyncThunk('expense', async () => {
//     const response = await axios.post('http://localhost:8000/expense')
// })

// const expenseSlice = createSlice ({
//     name: 'expense',
//     initialState: {
//         isLoading: false,
//         data: [],
//         isError: false
//     },
//     extraReducers: (builder) => {
//         builder.addCase(expense.pending, (state)=> {
//             state.isLoading=false
//         })
//         builder.addCase(expense.fulfilled, (state, action) => {
//             state.isLoading=false
//             state.data = []

//         })
//         builder.addCase(expense.rejected, (state, action) => {
//             console.log("Error", action.payload);
//             state.isError = true
//         })
//     }
// })


// export default expenseSlice.reducer
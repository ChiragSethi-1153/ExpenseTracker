import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


//action
export const signup = createAsyncThunk('signup', async (inputvalue) => {
    let response = await axios.post('http://localhost:8000/signup', inputvalue);
    response = response.data
    // console.log(response);
    return response;
})


const userSlice = createSlice ({ 
    name: 'user',
    initialState: {
        isLoading: false,
        data: [],
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(signup.pending, (state)=> {
            state.isLoading=false
        })
        builder.addCase(signup.fulfilled, (state, action) => {
            state.isLoading=false
        })
        builder.addCase(signup.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.isError = true
        })

        

    }
})


export default userSlice.reducer
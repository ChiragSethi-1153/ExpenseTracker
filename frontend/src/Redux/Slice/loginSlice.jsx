import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//action add
export const login = createAsyncThunk('login', async (inputvalue, thunkAPI) =>{
    try{
    let response = await axios.post('http://localhost:8000/login', inputvalue);
    console.log(response)
    return response
    }
    catch(err){
        console.error("Error getting session as user is unauthenticated ---> ", err);
        return thunkAPI.rejectWithValue((err).response?.data);
    }
})


const loginSlice = createSlice ({ 
    name: 'userLogin',
    initialState: {
        isLoading: false,
        data: [],
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state)=> {
            state.isLoading=false
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.isLoading=false
            state.data = []
        })
        builder.addCase(login.rejected, (state, action) => {
            console.log("Error", action);
            state.isError = true
        })
    }
})


export default loginSlice.reducer
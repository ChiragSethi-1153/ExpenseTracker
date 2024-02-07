
import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../Slice/userSlice'
import expenseReducer from '../Slice/expenseSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        expense: expenseReducer
    }
})

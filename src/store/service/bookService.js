import {createSlice} from "@reduxjs/toolkit";
import {bookSlice} from "../slice/bookSlice";

const bookService = createSlice({
    name: "books",
    initialState: {
        books: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(bookSlice.pending , (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(bookSlice.fulfilled, (state, action) => {
                state.loading = false;
                state.books = action.payload;
            })
            .addCase(bookSlice.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default bookService.reducer;
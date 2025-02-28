import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const bookSlice = createAsyncThunk("books/fetchBooks", async () => {
    const response = await axios.get("http://localhost:8000/book");
    console.log("response.data:", response.data);
    return response.data;
});
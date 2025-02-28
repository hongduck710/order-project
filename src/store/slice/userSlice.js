import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userSlice = createAsyncThunk("users/fetchUsers", async () => {
    const response = await axios.get("http://localhost:8000/users");
    console.log("response.data:", response.data);
    return response.data;
});
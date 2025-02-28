import {configureStore} from "@reduxjs/toolkit";
import userList from "./service/userService";
import bookList from "./service/bookService";

const store = configureStore({
    reducer: {
        userList,
        bookList
    }
});

export default store;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: [],
    booksLoading: false,
    booksError: "",
}
const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        setBooks: (state, action) => {
            state.books = action.payload;
            state.booksLoading = false;
            state.booksError = "";
        },
        setBooksLoading: (state) => {
            state.booksLoading = true;
            state.booksError = "";
        },
        setBooksError: (state, action) => {
            state.booksLoading = false;
            state.booksError = action.payload;
        },
    }
})

const booksReducer = bookSlice.reducer

export const { setBooks, setBooksError, setBooksLoading } = bookSlice.actions
export default booksReducer
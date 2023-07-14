import { createSlice } from "@reduxjs/toolkit";

type AuthState = {
    isLogged: boolean;
}

const initialState = {
    isLogged: false,
} as AuthState;

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: () => initialState,
        login: (state) => {
            state.isLogged = true;
        } 
    }
})

export const {
    logout,
    login
} = authSlice.actions;
export default authSlice.reducer;
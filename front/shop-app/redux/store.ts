import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./features/basketSlice";

export const store = configureStore({
    reducer: {
        basketReducer
    },
    devTools: true
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
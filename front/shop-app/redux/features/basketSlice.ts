import { BasketItem } from "@/data/basket";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: BasketItem[] = [];

type UpdateType = {
    productId: number;
    count: number;
}

const basketSlice = createSlice({
    name: 'basket',
    initialState: initialState,
    reducers: {
        setItems: (state, action:PayloadAction<BasketItem[]>) => {
            return action.payload;
        },
        updateItem: (state, action:PayloadAction<UpdateType>) => {
            const { productId, count } = action.payload;
            const itemIndex = state.findIndex((x) => x.productId === productId);

            if(itemIndex !== -1) state[itemIndex] = {...state[itemIndex], count}
        },
        deleteItem: (state, action:PayloadAction<number>) => {
            return state.filter(x => x.productId !== action.payload);
        }
    }
})

export const { setItems, updateItem, deleteItem } = basketSlice.actions;
export default basketSlice.reducer;
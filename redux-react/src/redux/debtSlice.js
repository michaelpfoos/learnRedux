import { createSlice } from '@reduxjs/toolkit';

export const debtSlice = createSlice({
    name: 'debt',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

//select debt value
export const selectDebt = (state) => state.debt.value;

//export actions
export const { increment: incrementDebt, decrement: decrementDebt, incrementByAmount: incrementDebtByAmount } = debtSlice.actions;

//export reducer
export default debtSlice.reducer;
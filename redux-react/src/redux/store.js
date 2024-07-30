import { configureStore } from '@reduxjs/toolkit';
import capitalSlice from './capitalSlice';
import debtSlice from './debtSlice';

//Store is where the "state" of the application is stored
export default configureStore({
    reducer: {
        capital: capitalSlice,
        debt: debtSlice,         
    },
});
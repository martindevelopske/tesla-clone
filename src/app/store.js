import { configureStore } from "@reduxjs/toolkit";
import carReducer from '../app/components/features/car/carSlice';

export const store=configureStore({
    reducer: {
        car: carReducer
    },
});
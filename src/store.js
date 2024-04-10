import { configureStore } from '@reduxjs/toolkit';
import nodesReducer from './slice/flowSlice';

const store = configureStore({
    reducer: {
        nodes: nodesReducer,
    },
});

export default store;
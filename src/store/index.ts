import { configureStore } from '@reduxjs/toolkit';
import timerReducer from './slices/timerSlice';
import userReducer from './slices/userSlice';
import taskReducer from './slices/taskSlice';

const store = configureStore({
    reducer: {
        timer: timerReducer,
        user: userReducer,
        task: taskReducer,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;

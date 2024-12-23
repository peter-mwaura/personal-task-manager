import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
    timeLeft: number;
    buttonToResetTimeLeft: string;
    startTimer: boolean;
    numberOfPomodoros: number;
}

const initialState: InitialState = {
    timeLeft: 10,
    buttonToResetTimeLeft: '',
    startTimer: false,
    numberOfPomodoros: 1,
};

const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        setTimeLeft: (state, action) => {
            state.timeLeft = action.payload;
        },
        setButtonToResetTimeLeft: (state, action) => {
            state.buttonToResetTimeLeft = action.payload;
        },
        setNewTimeLeft: (state) => {
            state.timeLeft -= 1;
        },
        setStartTimer: (state, action) => {
            state.startTimer = action.payload;
        },
        setNumberOfPomodoros: (state, action) => {
            if (action.payload === 'toInitialValue') {
                state.numberOfPomodoros = 1;
            } else if (action.payload === 'toIncreasedValue') {
                state.numberOfPomodoros += 1;
            }
        },
    },
});

export const {
    setTimeLeft,
    setButtonToResetTimeLeft,
    setNewTimeLeft,
    setStartTimer,
    setNumberOfPomodoros,
} = timerSlice.actions;
export default timerSlice.reducer;

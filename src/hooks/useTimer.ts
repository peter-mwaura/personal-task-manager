import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
    setNewTimeLeft,
    setStartTimer,
    setButtonToResetTimeLeft,
    setTimeLeft,
    setNumberOfPomodoros,
} from '../store/slices/timerSlice';
import { formatCurrentTime } from '../utils';
import { timerSettings } from '../config';

const useTimer = (
    timeLeft: number,
    buttonToResetTimeLeft: string,
    numberOfPomodoros: number
) => {
    const intervalIdRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const dispatch = useDispatch();

    const handleStartAndPauseButtonClick = (startTimer: boolean) => {
        if (startTimer) {
            intervalIdRef.current = setInterval(() => {
                dispatch(setNewTimeLeft());
            }, 1000);
        } else {
            if (intervalIdRef.current !== null)
                clearInterval(intervalIdRef.current);
        }
    };

    useEffect(() => {
        document.title = `${formatCurrentTime(timeLeft)} : ${
            buttonToResetTimeLeft === 'POMODORO'
                ? 'Time  for project'
                : 'Time for a break'
        }`;

        if (intervalIdRef.current !== null && timeLeft === 0) {
            clearInterval(intervalIdRef.current);
            dispatch(setStartTimer(false));

            if (
                buttonToResetTimeLeft === 'SHORT BREAK' ||
                buttonToResetTimeLeft === 'LONG BREAK'
            ) {
                dispatch(setButtonToResetTimeLeft('POMODORO'));
                dispatch(setTimeLeft(timerSettings[0].time));
            } else {
                if (numberOfPomodoros === 4) {
                    dispatch(setButtonToResetTimeLeft('LONG BREAK'));
                    dispatch(setTimeLeft(timerSettings[2].time));
                    dispatch(setNumberOfPomodoros('toInitialValue'));
                } else {
                    dispatch(setButtonToResetTimeLeft('SHORT BREAK'));
                    dispatch(setTimeLeft(timerSettings[1].time));
                    dispatch(setNumberOfPomodoros('toIncreasedValue'));
                }
            }
        }
    }, [numberOfPomodoros, timeLeft]);

    useEffect(() => {
        dispatch(setButtonToResetTimeLeft(timerSettings[0].name));
        dispatch(setTimeLeft(timerSettings[0].time));
    }, []);

    return { handleStartAndPauseButtonClick };
};

export default useTimer;

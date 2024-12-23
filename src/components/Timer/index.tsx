import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { formatCurrentTime, playNotificationSound } from '../../utils';
import {
    setTimeLeft,
    setButtonToResetTimeLeft,
    setStartTimer,
} from '../../store/slices/timerSlice';
import { timerSettings } from '../../config';
import useTimer from '../../hooks/useTimer';
import { useEffect } from 'react';

const Timer = () => {
    const timeLeft = useSelector((state: RootState) => state.timer.timeLeft);
    const buttonToResetTimeLeft = useSelector(
        (state: RootState) => state.timer.buttonToResetTimeLeft
    );
    const startTimer = useSelector(
        (state: RootState) => state.timer.startTimer
    );
    const numberOfPomodoros = useSelector(
        (state: RootState) => state.timer.numberOfPomodoros
    );

    const dispatch = useDispatch();

    const { handleStartAndPauseButtonClick } = useTimer(
        timeLeft,
        buttonToResetTimeLeft,
        numberOfPomodoros
    );

    useEffect(() => {
        let color = '';
        const element = document.getElementById('body');

        // Reassign color
        if (element) {
            if (buttonToResetTimeLeft === 'POMODORO') color = 'purple';
            if (buttonToResetTimeLeft === 'SHORT BREAK')
                color = 'rgb(186, 73, 73)';
            if (buttonToResetTimeLeft === 'LONG BREAK') color = 'gray';

            element.style.background = color;
        }
    }, [buttonToResetTimeLeft]);

    return (
        <div className="hero-timer">
            <div className="hero-timer-nav">
                {timerSettings.map(({ name, time }) => (
                    <button
                        style={{
                            background:
                                name === buttonToResetTimeLeft
                                    ? `rgba(0, 0, 0, 0.15)`
                                    : `none`,
                        }}
                        onClick={() => {
                            dispatch(setTimeLeft(time));
                            dispatch(setButtonToResetTimeLeft(name));
                            handleStartAndPauseButtonClick(false);
                            dispatch(setStartTimer(false));
                        }}
                        key={name}
                    >
                        {name}
                    </button>
                ))}
            </div>

            <div className="hero-timer-countdown">
                {formatCurrentTime(timeLeft)}
            </div>

            <div className="hero-timer-buttons">
                <button
                    className="hero-timer-btn"
                    style={{
                        opacity: startTimer === true ? '0.5' : '1.0',
                        cursor: startTimer === true ? 'not-allowed' : 'pointer',
                    }}
                    disabled={startTimer === true}
                    onClick={() => {
                        dispatch(setStartTimer(true));
                        handleStartAndPauseButtonClick(true);
                        playNotificationSound();
                    }}
                >
                    Start
                </button>
                <button
                    className="hero-timer-btn"
                    style={{
                        opacity: startTimer === false ? '0.5' : '1.0',
                        cursor:
                            startTimer === false ? 'not-allowed' : 'pointer',
                    }}
                    disabled={startTimer === false}
                    onClick={() => {
                        dispatch(setStartTimer(false));
                        handleStartAndPauseButtonClick(false);
                        playNotificationSound();
                    }}
                >
                    Pause
                </button>
            </div>
        </div>
    );
};

export default Timer;

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';
import notificationSound from '../assets/audio/notificationSound.wav';
import { AuthType } from '../config/firebaseConfig';

export const formatCurrentTime = (currentTime: number) => {
    const minutes = String(Math.floor(currentTime / 60));
    const seconds = String(currentTime % 60);

    return `${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
};

export const playNotificationSound = () => {
    const audio = new Audio(notificationSound);
    return audio.play();
};

export const registerWithFirebase = (
    auth: AuthType,
    email: string,
    password: string
) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const loginWithFirebase = (
    auth: AuthType,
    email: string,
    password: string
) => {
    return signInWithEmailAndPassword(auth, email, password);
};

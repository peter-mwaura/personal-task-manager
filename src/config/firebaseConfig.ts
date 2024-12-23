import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyBeP9u0nZFiQg5lqNgSYHrIp1v7_vFsye4',
    authDomain: 'personal-task-manager-d6e67.firebaseapp.com',
    projectId: 'personal-task-manager-d6e67',
    storageBucket: 'personal-task-manager-d6e67.firebasestorage.app',
    messagingSenderId: '494728131587',
    appId: '1:494728131587:web:cc76356957fd200432ca36',
    measurementId: 'G-0YT69QT5MJ',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export type AuthType = ReturnType<typeof getAuth>;
export default auth;

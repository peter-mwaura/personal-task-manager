import { createSlice } from '@reduxjs/toolkit';

export interface RegisterFormData {
    email: string;
    password: string;
    confirmPassword: string;
}

interface LoginFormData {
    email: string;
    password: string;
}

interface RegistrationFormErrors {
    email: string;
    password: string;
    confirmPassword: string;
}

interface LoginFormErrors {
    email: string;
    password: string;
}

interface InitialState {
    registerFormData: RegisterFormData;
    loginFormData: LoginFormData;
    registrationFormErrors: RegistrationFormErrors;
    loginFormErrors: LoginFormErrors;
}

const initialState: InitialState = {
    registerFormData: {
        email: '',
        password: '',
        confirmPassword: '',
    },
    loginFormData: {
        email: '',
        password: '',
    },
    registrationFormErrors: {
        email: '',
        password: '',
        confirmPassword: '',
    },
    loginFormErrors: {
        email: '',
        password: '',
    },
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setRegisterFormData: (state, action) => {
            state.registerFormData = {
                ...state.registerFormData,
                ...action.payload,
            };
        },
        setLoginFormData: (state, action) => {
            state.loginFormData = {
                ...state.loginFormData,
                ...action.payload,
            };
        },
        setRegistrationFormErrors: (state, action) => {
            state.registrationFormErrors = {
                ...state.registrationFormErrors,
                ...action.payload,
            };
        },
        setLoginFormErrors: (state, action) => {
            state.loginFormErrors = {
                ...state.loginFormErrors,
                ...action.payload,
            };
        },
        clearRegisterFormData: (state) => {
            state.registerFormData = {
                email: '',
                password: '',
                confirmPassword: '',
            };
        },
        clearLoginFormData: (state) => {
            state.loginFormData = { email: '', password: '' };
        },
    },
});

export const {
    setRegisterFormData,
    setLoginFormData,
    clearRegisterFormData,
    clearLoginFormData,
    setRegistrationFormErrors,
    setLoginFormErrors,
} = userSlice.actions;
export default userSlice.reducer;

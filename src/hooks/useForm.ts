import { useDispatch, useSelector } from 'react-redux';
import {
    setRegisterFormData,
    setRegistrationFormErrors,
} from '../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store';
import {
    validateConfirmPassword,
    validateEmail,
    validatePassword,
} from '../utils/validationChecks';

const useForm = () => {
    const registerFormData = useSelector(
        (state: RootState) => state.user.registerFormData
    );

    const { email, password, confirmPassword } = registerFormData;

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        // Update registerFormData state
        dispatch(setRegisterFormData({ [name]: value }));

        // Validate inputs reactively
        let error = '';
        if (name === 'email') error = validateEmail(value);
        if (name === 'password') error = validatePassword(value);
        if (name === 'confirmPassword')
            error = validateConfirmPassword(value, password);

        // Update errors state
        dispatch(setRegistrationFormErrors({ [name]: error }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Validate all inputs on submit
        const emailError = validateEmail(email);
        const passwordError = validatePassword(password);
        const confirmPasswordError = validateConfirmPassword(
            confirmPassword,
            password
        );
        dispatch(
            setRegistrationFormErrors({
                email: emailError,
                password: passwordError,
                confirmPassword: confirmPasswordError,
            })
        );

        // If no errors, proceed with form submission
        if (!emailError && !passwordError && !confirmPasswordError) {
            console.log('Form submitted successfully!', registerFormData);
            navigate('/login');
        }
    };

    return { handleChange, handleSubmit };
};

export default useForm;

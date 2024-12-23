import { useDispatch, useSelector } from 'react-redux';
// import { loginWithFirebase } from '../../utils';
import { RootState } from '../../store';
import {
    // clearLoginFormData,
    setLoginFormData,
    setLoginFormErrors,
} from '../../store/slices/userSlice';
// import auth from '../../config/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { validateEmail, validatePassword } from '../../utils/validationChecks';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { email, password } = useSelector(
        (state: RootState) => state.user.loginFormData
    );
    const loginFormErrors = useSelector(
        (state: RootState) => state.user.loginFormErrors
    );

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Validate all inputs on submit
        const emailError = validateEmail(email);
        const passwordError = validatePassword(password);

        dispatch(
            setLoginFormErrors({
                email: emailError,
                password: passwordError,
            })
        );

        if (!emailError && !passwordError) {
            console.log('Login successful');
            navigate('/');
        } else {
            alert(JSON.stringify(loginFormErrors));
        }
        // loginWithFirebase(auth, email, password)
        //     .then((result) => {
        //         console.log(result);
        //         navigate('/');
        //         dispatch(clearLoginFormData());
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        dispatch(setLoginFormData({ [name]: value }));

        let error = '';
        if (name === 'email') error = validateEmail(value);
        if (name === 'password') error = validatePassword(value);
        dispatch(setLoginFormErrors({ [name]: error }));
    };

    const isValid = !loginFormErrors.email && !loginFormErrors.password;

    return (
        <div>
            Login Page
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    autoComplete="off"
                    value={email}
                    onChange={handleChange}
                />
                {loginFormErrors.email && (
                    <p style={{ color: 'red' }}>{loginFormErrors.email}</p>
                )}
                <input
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    autoComplete="off"
                    value={password}
                    onChange={handleChange}
                />
                {loginFormErrors.password && (
                    <p style={{ color: 'red' }}>{loginFormErrors.password}</p>
                )}
                <button type="submit" disabled={!isValid}>
                    Login
                </button>
                <span>
                    If you don't alraedy have an account please register
                </span>
                <Link to="/register">
                    <button>Register</button>
                </Link>
            </form>
        </div>
    );
};

export default LoginPage;

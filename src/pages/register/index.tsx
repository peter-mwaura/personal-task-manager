import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import useForm from '../../hooks/useForm';

const RegisterPage = (): JSX.Element => {
    const registrationFormErrors = useSelector(
        (state: RootState) => state.user.registrationFormErrors
    );

    const registerFormData = useSelector(
        (state: RootState) => state.user.registerFormData
    );

    const { email, password, confirmPassword } = registerFormData;

    const { handleChange, handleSubmit } = useForm();

    // Determine if form has any errors
    const isFormValid =
        !registrationFormErrors.email &&
        !registrationFormErrors.password &&
        !registrationFormErrors.confirmPassword;

    return (
        <div>
            Register Page
            <form
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '50%',
                    gap: '15px',
                }}
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <input
                    style={{ border: '4px solid black', borderRadius: '5px' }}
                    type="text"
                    placeholder="Enter email"
                    name="email"
                    onChange={handleChange}
                    value={email}
                    autoComplete="off"
                />
                {registrationFormErrors.email && (
                    <p style={{ color: 'red' }}>
                        {registrationFormErrors.email}
                    </p>
                )}

                <input
                    style={{ border: '4px solid black', borderRadius: '5px' }}
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    onChange={handleChange}
                    value={password}
                    autoComplete="off"
                />
                {registrationFormErrors.password && (
                    <p style={{ color: 'red' }}>
                        {registrationFormErrors.password}
                    </p>
                )}

                <input
                    style={{ border: '4px solid black', borderRadius: '5px' }}
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    autoComplete="off"
                    onChange={handleChange}
                    value={confirmPassword}
                />
                {registrationFormErrors.confirmPassword && (
                    <p style={{ color: 'red' }}>
                        {registrationFormErrors.confirmPassword}
                    </p>
                )}
                <button type="submit" disabled={!isFormValid}>
                    Register
                </button>
            </form>
        </div>
    );
};

export default RegisterPage;

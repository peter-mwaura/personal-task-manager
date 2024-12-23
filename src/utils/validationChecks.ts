export const validateEmail = (email: string) => {
    const Email = email.trim();
    const EmailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!Email) {
        return 'Email is required';
    } else if (!new RegExp(EmailRegEx).test(Email)) {
        return 'Email in invalid';
    }
    return '';
};

export const validatePassword = (password: string) => {
    const Password = password.trim();
    const pwdRegEx = {
        lengthCheck: 6,
    };
    if (!Password) {
        return 'Password is required';
    }
    if (Password.length < pwdRegEx.lengthCheck) {
        return 'Password must contain minimum of 6 characters';
    }
    return '';
};

export const validateConfirmPassword = (
    confirmPassword: string,
    password: string
) => {
    const ConfirmPassword = confirmPassword.trim();
    if (!ConfirmPassword) {
        return 'Confirm Password is required';
    }
    if (ConfirmPassword !== password) {
        return 'Passwords must match';
    }
    return '';
};

const PasswordPage = () => {
    return (
        <div>
            Password
            <input
                type="password"
                placeholder="Enter password"
                name="password"
                autoComplete="off"
            />
            <input
                type="confirm password"
                placeholder="Enter password"
                name="confirm password"
                autoComplete="off"
            />
            <button type="submit">Submit</button>
        </div>
    );
};

export default PasswordPage;

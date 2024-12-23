interface CommonInputAttributes {
    type: string;
    name: string;
    placeholder: string;
    value: string;
    className: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const CommonInput = ({
    type,
    name,
    placeholder,
    value,
    className,
    onChange,
}: CommonInputAttributes) => {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            className={className}
            onChange={onChange}
        />
    );
};

export default CommonInput;

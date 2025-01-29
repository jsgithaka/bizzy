export default function Input({
    id,
    label,
    type,
    value,
    placeholder,
}: InputProps) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type={type}
                value={value}
                placeholder={placeholder}
            />
        </div>
    );
}

interface InputProps {
    id?: string;
    label?: string;
    type?: string;
    placeholder?: string;
    labelTag?: boolean;
    value?: string;
}

export default function Input({
    id,
    label,
    type,
    placeholder,
    labelTag,
}: InputProps) {
    return (
        <div>
            {labelTag ? <label htmlFor={id}>{label}</label> : <></>}
            <input
                id={id}
                type={type}
                placeholder={placeholder}
            />
        </div>
    );
}

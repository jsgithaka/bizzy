import { InputStyles } from '@sharedStyles';
import { dmSans } from '@variableFonts';

export default function Input({
    id,
    label,
    type,
    value,
    placeholder,
    method,
}: InputProps) {
    return (
        <div className={InputStyles.Input}>
            {label ? <label htmlFor={id}>{label}</label> : <></>}
            <input
                className={dmSans.className}
                id={id}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={method}
            />
        </div>
    );
}

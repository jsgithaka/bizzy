import { InputStyles } from '@sharedStyles';
import { albertSans } from '@fonts';

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
    value,
}: InputProps) {
    return (
        <div className={InputStyles.Input}>
            {labelTag ? <label htmlFor={id}>{label}</label> : <></>}
            <input
                className={albertSans.className}
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
            />
        </div>
    );
}

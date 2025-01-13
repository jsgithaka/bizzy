import { Input } from '@sharedComponents';
import { FormStyles } from '@sharedStyles';
import { ReactNode } from 'react';

interface FormProps {
    children: ReactNode;
    method?: () => void;
    value?: string;
}

export default function Form({ children, method, value }: FormProps) {
    return (
        <form
            onSubmit={method}
            className={FormStyles.Form}
        >
            {children}
            <Input
                type='submit'
                value={value}
            />
        </form>
    );
}

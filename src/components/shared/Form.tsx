import { Input } from '@sharedComponents';
import { ReactNode } from 'react';

interface FormProps {
    children: ReactNode;
    method?: () => void;
    value?: string;
}

export default function Form({ children, method, value }: FormProps) {
    return (
        <form onSubmit={method}>
            {children}
            <Input
                type='submit'
                value={value}
            />
        </form>
    );
}

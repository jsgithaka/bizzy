import { Input } from '@sharedComponents';

export default function Form({ children, value }: FormProps) {
    return (
        <form action=''>
            {children}
            <Input
                type='submit'
                value={value}
            />
        </form>
    );
}

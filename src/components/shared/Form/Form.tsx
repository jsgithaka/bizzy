import { Input } from '@sharedComponents';
import { FormStyles } from '@sharedStyles';

export default function Form({ children, value, method }: FormProps) {
    return (
        <form
            className={FormStyles.Form}
            onSubmit={method}
        >
            {children}
            <Input
                type='submit'
                value={value}
            />
        </form>
    );
}

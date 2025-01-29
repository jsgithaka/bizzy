import { Input } from '@sharedComponents';
import { FormStyles } from '@sharedStyles';

export default function Form({ children, value }: FormProps) {
    return (
        <form
            action=''
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

import { View } from '@layoutComponents';
import { Form } from '@sharedComponents';
import { ReactNode } from 'react';

interface AuthenticationProps {
    children: ReactNode;
}

export default function Authentication({ children }: AuthenticationProps) {
    return (
        <View id='authentication'>
            <Form>{children}</Form>
        </View>
    );
}

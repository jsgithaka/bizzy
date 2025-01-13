import { View } from '@layoutComponents';
import { Form } from '@sharedComponents';
import { ReactNode } from 'react';

interface AuthenticationProps {
    children: ReactNode;
    value: string;
}

export default function Authentication({
    children,
    value,
}: AuthenticationProps) {
    return (
        <View id='authentication'>
            <Form value={value}>{children}</Form>
        </View>
    );
}

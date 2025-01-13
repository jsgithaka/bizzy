import { View } from '@layoutComponents';
import { Form } from '@sharedComponents';
import { AuthenticationStyles } from '@viewsStyles';
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
        <View
            id='authentication'
            styles={AuthenticationStyles.Authentication}
        >
            <Form value={value}>{children}</Form>
        </View>
    );
}

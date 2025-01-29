import { Form, Input, Logo } from '@sharedComponents';
import { View } from '@structuralComponents';
import { SignDownStyles } from '@viewsStyles';

export default function SignDown() {
    return (
        <View
            id='reset'
            styles={SignDownStyles.SignDown}
        >
            <Logo />
            <Form value='Reset'>
                <Input
                    type='email'
                    label='Email'
                    placeholder='your@email.com'
                    id='email'
                />
            </Form>
        </View>
    );
}

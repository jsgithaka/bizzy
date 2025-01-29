import { Form, Input, Logo } from '@sharedComponents';
import { View } from '@structuralComponents';
import { SignUpStyles } from '@viewsStyles';

export default function SignUp() {
    return (
        <View
            id='register'
            styles={SignUpStyles.SignUp}
        >
            <Logo />
            <Form value='Register'>
                <Input
                    type='email'
                    label='Email'
                    placeholder='your@email.com'
                    id='email'
                />
                <Input
                    type='password'
                    label='Password'
                    placeholder='********'
                    id='password'
                />
                <Input
                    type='password'
                    label='Confirm Password'
                    placeholder='********'
                    id='confirm-password'
                />
            </Form>
        </View>
    );
}

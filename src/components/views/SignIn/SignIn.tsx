import { Form, Input, Logo } from '@sharedComponents';
import { View } from '@structuralComponents';
import { SignInStyles } from '@viewsStyles';

export default function SignIn() {
    return (
        <View
            id='login'
            styles={SignInStyles.SignIn}
        >
            <Logo />
            <Form value='Login'>
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
            </Form>
        </View>
    );
}

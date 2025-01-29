import { Page } from '@layoutComponents';
import { NavigationItem, Button } from '@sharedComponents';
import { SignUp } from '@viewsComponents';

export default function Register() {
    return (
        <Page
            headerChildren={
                <>
                    <NavigationItem
                        href='/login'
                        name='Login'
                    />
                    <NavigationItem
                        href='/register'
                        name='Register'
                        active
                    />
                    <NavigationItem
                        href='/reset'
                        name='Reset'
                    />
                    <Button
                        href='/login'
                        name='Landing'
                    />
                </>
            }
            mainChildren={
                <>
                    <SignUp />
                </>
            }
        />
    );
}

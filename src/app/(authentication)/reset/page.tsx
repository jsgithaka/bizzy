import { Page } from '@layoutComponents';
import { NavigationItem, Button } from '@sharedComponents';
import { SignDown } from '@viewsComponents';

export default function Reset() {
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
                    />
                    <NavigationItem
                        href='/reset'
                        name='Reset'
                        active
                    />
                    <Button
                        href='/login'
                        name='Landing'
                    />
                </>
            }
            mainChildren={
                <>
                    <SignDown />
                </>
            }
        />
    );
}

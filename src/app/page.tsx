import { Page } from '@layoutComponents';
import { NavigationItem, Button } from '@sharedComponents';

export default function Landing() {
    return (
        <Page
            headerChildren={
                <>
                    <NavigationItem
                        href='/'
                        name='Landing'
                        active
                    />
                    <NavigationItem
                        href='/docs'
                        name='Docs'
                    />
                    <Button
                        href='/login'
                        name='Login'
                    />
                </>
            }
            mainChildren={<></>}
        />
    );
}

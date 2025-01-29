import { PageStyles } from '@layoutStyles';
import { Brand, Button, Navigation, NavigationItem } from '@sharedComponents';
import { Header, Main } from '@structuralComponents';

export default function Page() {
    return (
        <body className={PageStyles.Page}>
            <Header>
                <Brand />
                <Navigation>
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
                </Navigation>
            </Header>
            <Main />
        </body>
    );
}

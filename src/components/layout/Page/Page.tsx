import { PageStyles } from '@layoutStyles';
import { Brand, Navigation, NavigationItem } from '@sharedComponents';
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
                    />
                    <NavigationItem
                        href='/docs'
                        name='Docs'
                    />
                </Navigation>
            </Header>
            <Main />
        </body>
    );
}

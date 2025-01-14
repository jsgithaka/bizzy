import {
    Container,
    Header,
    Main,
    Footer,
    Breadcrumbs,
} from '@layoutComponents';
import { Button, NavigationItem } from '@sharedComponents';

export default function About() {
    return (
        <>
            <Header>
                <NavigationItem
                    href='/'
                    name='Landing'
                />
                <NavigationItem
                    href='/about'
                    name='About'
                    active
                />
                <Button
                    href='/login'
                    name='Account'
                />
            </Header>
            <Breadcrumbs name='About'>
                <NavigationItem
                    href='/about'
                    name='About'
                />
            </Breadcrumbs>
            <Main>
                <Container></Container>
                <Footer />
            </Main>
        </>
    );
}

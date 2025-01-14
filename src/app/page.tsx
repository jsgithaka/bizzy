import { Container, Header, Main, Footer } from '@layoutComponents';
import { Button, NavigationItem } from '@sharedComponents';

export default function Landing() {
    return (
        <>
            <Header>
                <NavigationItem
                    href='/'
                    name='Landing'
                    active
                />
                <NavigationItem
                    href='/about'
                    name='About'
                />
                <Button
                    href='/login'
                    name='Account'
                />
            </Header>
            <Main>
                <Container />
                <Footer />
            </Main>
        </>
    );
}

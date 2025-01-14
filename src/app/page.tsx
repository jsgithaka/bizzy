import { Container, Header, Main, Footer } from '@layoutComponents';
import { Button, NavigationItem } from '@sharedComponents';

export default function Home() {
    return (
        <>
            <Header>
                <NavigationItem
                    href='/'
                    name='Home'
                    active
                />
                <NavigationItem
                    href='/'
                    name='About'
                />
                <Button
                    href='/'
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

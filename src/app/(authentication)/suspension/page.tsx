import { Container, Header, Main, Footer } from '@layoutComponents';
import { Logo } from '@sharedComponents';
import { Authentication } from '@viewsComponents';

export default function Suspension() {
    return (
        <>
            <Header />
            <Main>
                <Container>
                    <Authentication>
                        <Logo />
                        <strong>Access Suspended!</strong>
                    </Authentication>
                </Container>
                <Footer />
            </Main>
        </>
    );
}

import { Container, Header, Main, Footer } from '@layoutComponents';
import { Input, Logo } from '@sharedComponents';
import { Authentication } from '@viewsComponents';

export default function Recover() {
    return (
        <>
            <Header />
            <Main>
                <Container>
                    <Authentication value='Recover'>
                        <Logo />
                        <Input
                            label='Email'
                            id='email'
                            placeholder='your@email.com'
                            labelTag
                            type='email'
                        />
                    </Authentication>
                </Container>
                <Footer />
            </Main>
        </>
    );
}

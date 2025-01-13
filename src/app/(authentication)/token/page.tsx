import { Container, Header, Main, Footer } from '@layoutComponents';
import { Input, Logo } from '@sharedComponents';
import { Authentication } from '@viewsComponents';

export default function Token() {
    return (
        <>
            <Header />
            <Main>
                <Container>
                    <Authentication value='Token'>
                        <Logo />
                        <Input
                            label='Token'
                            id='token'
                            placeholder='ABC-123-DEF-456'
                            labelTag
                            type='text'
                        />
                    </Authentication>
                </Container>
                <Footer />
            </Main>
        </>
    );
}

import { Container, Header, Main, Footer } from '@layoutComponents';
import { Input } from '@sharedComponents';
import { Authentication } from '@viewsComponents';

export default function Login() {
    return (
        <>
            <Header />
            <Main>
                <Container>
                    <Authentication value='Login'>
                        <Input
                            label='ID'
                            id='id'
                            placeholder='Bizzy ID'
                            labelTag
                            type='text'
                        />
                        <Input
                            label='Password'
                            id='password'
                            placeholder='Password'
                            labelTag
                            type='password'
                        />
                    </Authentication>
                </Container>
                <Footer />
            </Main>
        </>
    );
}
import { Container, Header, Main, Footer } from '@layoutComponents';
import { Input, Logo } from '@sharedComponents';
import { Authentication } from '@viewsComponents';

export default function Reset() {
    return (
        <>
            <Header />
            <Main>
                <Container>
                    <Authentication value='Reset'>
                        <Logo />
                        <Input
                            label='Email'
                            id='email'
                            value='your@email.com'
                            type='hidden'
                        />
                        <Input
                            label='Password'
                            id='password_1'
                            placeholder='Password'
                            labelTag
                            type='password'
                        />
                        <Input
                            label='Confirm Password'
                            id='password_2'
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

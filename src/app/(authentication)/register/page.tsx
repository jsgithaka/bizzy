import { Container, Header, Main, Footer } from '@layoutComponents';
import { Input, Logo } from '@sharedComponents';
import { Authentication } from '@viewsComponents';

export default function Register() {
    return (
        <>
            <Header />
            <Main>
                <Container>
                    <Authentication value='Register'>
                        <Logo />
                        <Input
                            label='Email'
                            id='email'
                            placeholder='your@email.com'
                            labelTag
                            type='email'
                        />
                        <Input
                            label='Password'
                            id='password'
                            placeholder='Password'
                            labelTag
                            type='password_1'
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

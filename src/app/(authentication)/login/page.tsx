import { Container, Header, Main, Footer } from '@layoutComponents';
import { Button, Input, Logo, NavigationItem } from '@sharedComponents';
import { Authentication } from '@viewsComponents';

export default function Login() {
    return (
        <>
            <Header>
                <NavigationItem
                    href='/login'
                    name='Login'
                    active
                />
                <NavigationItem
                    href='/register'
                    name='Register'
                />
                <NavigationItem
                    href='/recover'
                    name='Recover'
                />
                <Button
                    href='/'
                    name='Home'
                />
            </Header>
            <Main>
                <Container>
                    <Authentication value='Login'>
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
                            type='password'
                        />
                    </Authentication>
                </Container>
                <Footer />
            </Main>
        </>
    );
}

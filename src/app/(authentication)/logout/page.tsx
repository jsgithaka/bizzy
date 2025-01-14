import { Container, Header, Main, Footer } from '@layoutComponents';
import { Button, Input, Logo, NavigationItem } from '@sharedComponents';
import { Authentication } from '@viewsComponents';

export default function Logout() {
    return (
        <>
            <Header>
                <NavigationItem
                    href='/logout'
                    name='Logout'
                    active
                />
                <NavigationItem
                    href='/login'
                    name='Login'
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
                            type='hidden'
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

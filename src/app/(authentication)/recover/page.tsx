import { Container, Header, Main, Footer } from '@layoutComponents';
import { Button, Input, Logo, NavigationItem } from '@sharedComponents';
import { Authentication } from '@viewsComponents';

export default function Recover() {
    return (
        <>
            <Header>
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
                    active
                />
                <Button
                    href='/'
                    name='Home'
                />
            </Header>
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

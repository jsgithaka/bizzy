import { PageStyles } from '@layoutStyles';
import { Brand, Navigation } from '@sharedComponents';
import { Footer, Header, Main } from '@structuralComponents';

export default function Page({ headerChildren, mainChildren }: PageProps) {
    return (
        <body className={PageStyles.Page}>
            <Header>
                <Brand />
                <Navigation>{headerChildren}</Navigation>
            </Header>
            <Main>
                {mainChildren}
                <Footer />
            </Main>
        </body>
    );
}

import { PageStyles } from '@layoutStyles';
import { Brand, Navigation } from '@sharedComponents';
import { Header, Main } from '@structuralComponents';

export default function Page({ headerChildren, mainChildren }: PageProps) {
    return (
        <body className={PageStyles.Page}>
            <Header>
                <Brand />
                <Navigation>{headerChildren}</Navigation>
            </Header>
            <Main>{mainChildren}</Main>
        </body>
    );
}

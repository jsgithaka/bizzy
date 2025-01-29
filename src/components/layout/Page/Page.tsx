import { PageStyles } from '@layoutStyles';
import { Brand, Navigation } from '@sharedComponents';
import { Header, Main } from '@structuralComponents';

export default function Page() {
    return (
        <body className={PageStyles.Page}>
            <Header>
                <Brand />
                <Navigation />
            </Header>
            <Main />
        </body>
    );
}

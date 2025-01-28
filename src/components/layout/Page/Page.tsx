import { PageStyles } from '@layoutStyles';
import { Brand } from '@sharedComponents';
import { Header, Main } from '@structuralComponents';

export default function Page() {
    return (
        <body className={PageStyles.Page}>
            <Header>
                <Brand />
            </Header>
            <Main />
        </body>
    );
}

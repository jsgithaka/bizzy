import { PageStyles } from '@layoutStyles';
import { Header, Main } from '@structuralComponents';

export default function Page() {
    return (
        <body className={PageStyles.Page}>
            <Header />
            <Main />
        </body>
    );
}

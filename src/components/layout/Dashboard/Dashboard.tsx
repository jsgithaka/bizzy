import { DashboardStyles } from '@layoutStyles';
import { Aside, Header, Main } from '@structuralComponents';

export default function Dashboard() {
    return (
        <body className={DashboardStyles.Dashboard}>
            <Header />
            <Main />
            <Aside />
        </body>
    );
}

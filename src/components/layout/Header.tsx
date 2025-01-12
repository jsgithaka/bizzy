import { HeaderStyles } from '@layoutStyles';
import { Brand } from '@sharedComponents';

export default function Header() {
    return (
        <header className={[HeaderStyles.Header, 'Layout'].join(' ')}>
            <Brand />
        </header>
    );
}

import { HeaderStyles } from '@layoutStyles';
import { Brand, Navigation } from '@sharedComponents';
import { ReactNode } from 'react';

interface HeaderProps {
    children?: ReactNode;
}

export default function Header({ children }: HeaderProps) {
    return (
        <header className={[HeaderStyles.Header, 'Layout'].join(' ')}>
            <Brand />
            <Navigation>{children}</Navigation>
        </header>
    );
}

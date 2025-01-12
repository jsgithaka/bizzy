import { MainStyles } from '@layoutStyles';
import { ReactNode } from 'react';

interface MainProps {
    children: ReactNode;
}

export default function Main({ children }: MainProps) {
    return (
        <main className={[MainStyles.Main, 'Layout'].join(' ')}>
            {children}
        </main>
    );
}

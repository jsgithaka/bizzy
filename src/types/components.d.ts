import { ReactNode } from 'react';

declare global {
    interface HeaderProps {
        children: ReactNode;
    }

    interface NavigationItemProps {
        href: string;
        name: string;
    }

    interface NavigationProps {
        children: ReactNode;
    }
}

export {};

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

    interface NavigationLargeProps {
        children: ReactNode;
    }

    interface NavigationSmallProps {
        children: ReactNode;
    }
}

export {};

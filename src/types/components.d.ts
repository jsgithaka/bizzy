import { ReactNode } from 'react';

declare global {
    interface HeaderProps {
        children: ReactNode;
    }

    interface NavigationItemProps {
        href: string;
        name: string;
        active?: boolean;
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

    interface ButtonProps {
        href: string;
        name: string;
    }
}

export {};

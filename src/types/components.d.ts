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

    interface IconProps {
        name: string;
        alt: string;
        width: number;
        height: number;
    }

    interface MainProps {
        children: ReactNode;
    }

    interface PageProps {
        headerChildren: ReactNode;
        mainChildren: ReactNode;
    }

    interface InputProps {
        id?: string;
        label?: string;
        type: string;
        value?: string;
        placeholder?: string;
    }

    interface FormProps {
        children: ReactNode;
        value: value;
    }
}

export {};

import { NavigationStyles } from '@sharedStyles';
import { ReactNode } from 'react';
import NavigationSmall from './fragments/NavigationSmall';

interface NavigationProps {
    children?: ReactNode;
}

export default function Navigation({ children }: NavigationProps) {
    return (
        <nav className={NavigationStyles.Navigation}>
            <div className={NavigationStyles.NavigationLarge}>{children}</div>
            <NavigationSmall>{children}</NavigationSmall>
        </nav>
    );
}

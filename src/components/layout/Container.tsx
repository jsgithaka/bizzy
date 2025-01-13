import { ContainerStyles } from '@layoutStyles';
import { ReactNode } from 'react';

interface ContainerProps {
    children?: ReactNode;
}

export default function Container({ children }: ContainerProps) {
    return <section className={ContainerStyles.Container}>{children}</section>;
}

import { ViewStyles } from '@layoutStyles';
import { ReactNode } from 'react';

interface ViewProps {
    id: string;
    styles?: string;
    children?: ReactNode;
}

export default function View({ id, styles, children }: ViewProps) {
    return (
        <section
            id={id}
            className={[ViewStyles.View, styles].join(' ')}
        >
            {children}
        </section>
    );
}

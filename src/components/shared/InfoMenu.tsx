import { InfoMenuStyles } from '@sharedStyles';
import { ReactNode } from 'react';

interface InfoMenuProps {
    children: ReactNode;
}

export default function InfoMenu({ children }: InfoMenuProps) {
    return <aside className={InfoMenuStyles.InfoMenu}>{children}</aside>;
}

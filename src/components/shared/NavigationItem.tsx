import { NavigationItemStyles } from '@sharedStyles';
import Link from 'next/link';

interface NavigationItemProps {
    href: string;
    name: string;
    active?: boolean;
}

export default function NavigationItem({
    href,
    name,
    active,
}: NavigationItemProps) {
    return (
        <Link
            href={href}
            className={
                active
                    ? NavigationItemStyles.NavigationItemActive
                    : NavigationItemStyles.NavigationItem
            }
        >
            {name}
        </Link>
    );
}

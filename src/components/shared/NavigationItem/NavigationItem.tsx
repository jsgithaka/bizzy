import { NavigationItemStyles } from '@sharedStyles';
import Link from 'next/link';

export default function NavigationItem({ href, name }: NavigationItemProps) {
    return (
        <Link
            className={NavigationItemStyles.NavigationItem}
            href={href}
        >
            {name}
        </Link>
    );
}

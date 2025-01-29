import Link from 'next/link';

export default function NavigationItem({ href, name }: NavigationItemProps) {
    return <Link href={href}>{name}</Link>;
}

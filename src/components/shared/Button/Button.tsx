import Link from 'next/link';

export default function Button({ href, name }: ButtonProps) {
    return <Link href={href}>{name}</Link>;
}

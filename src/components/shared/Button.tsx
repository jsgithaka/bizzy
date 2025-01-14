import { ButtonStyles } from '@sharedStyles';
import Link from 'next/link';

interface ButtonProps {
    href: string;
    name: string;
}

export default function Button({ href, name }: ButtonProps) {
    return (
        <Link
            href={href}
            className={ButtonStyles.Button}
        >
            {name}
        </Link>
    );
}

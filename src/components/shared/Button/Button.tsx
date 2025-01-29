import { ButtonStyles } from '@sharedStyles';
import Link from 'next/link';

export default function Button({ href, name }: ButtonProps) {
    return (
        <Link
            className={ButtonStyles.Button}
            href={href}
        >
            {name}
        </Link>
    );
}

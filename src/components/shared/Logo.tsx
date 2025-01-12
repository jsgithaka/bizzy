import Image from 'next/image';
import { LogoStyles } from '@sharedStyles';

export default function Logo() {
    return (
        <div className={LogoStyles.Logo}>
            <Image
                src={'/logo.svg'}
                alt='The Bizzy Logo'
                width={32}
                height={32}
            />
        </div>
    );
}

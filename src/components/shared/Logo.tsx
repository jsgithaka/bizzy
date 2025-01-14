import Image from 'next/image';
import { LogoStyles } from '@sharedStyles';

export default function Logo() {
    return (
        <div className={LogoStyles.Logo}>
            <Image
                src={'/logo.svg'}
                alt='The Bizzy Logo'
                width={28}
                height={28}
            />
        </div>
    );
}

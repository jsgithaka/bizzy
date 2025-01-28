import Image from 'next/image';

export default function Logo() {
    return (
        <div>
            <Image
                src='/logo.svg'
                alt='The Bizzy Logo'
                width={32}
                height={32}
            />
        </div>
    );
}

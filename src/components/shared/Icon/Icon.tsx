import { IconStyles } from '@sharedStyles';
import Image from 'next/image';

export default function Icon({ name, alt, width, height }: IconProps) {
    return (
        <div className={IconStyles.Icon}>
            <Image
                src={`/icons/${name}.svg`}
                alt={alt}
                width={width}
                height={height}
            />
        </div>
    );
}

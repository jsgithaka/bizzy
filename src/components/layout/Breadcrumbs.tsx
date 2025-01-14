'use client';

import { useState } from 'react';

import { BreadcrumbsStyles } from '@layoutStyles';
import { InfoMenu } from '@sharedComponents';
import { ReactNode } from 'react';
import Image from 'next/image';

interface BreadcrumbsProps {
    children?: ReactNode;
    name?: string;
}

export default function Breadcrumbs({ children, name }: BreadcrumbsProps) {
    const [menu, setMenu] = useState<boolean>(false);
    const triggerMenu = () => {
        setMenu(!menu);
    };
    return (
        <div className={[BreadcrumbsStyles.Breadcrumbs, 'Layout'].join(' ')}>
            <div
                className={BreadcrumbsStyles.BreadcrumbsTrigger}
                onClick={triggerMenu}
            >
                <Image
                    src={`/icons/${menu ? 'cancel' : 'hamburger'}.svg`}
                    alt='Carret Icon'
                    width={16}
                    height={16}
                />
            </div>
            <p>/ {name}</p>
            {menu ? <InfoMenu>{children}</InfoMenu> : <></>}
        </div>
    );
}

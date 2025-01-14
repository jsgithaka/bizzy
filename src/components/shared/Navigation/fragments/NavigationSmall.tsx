'use client';

import { useEffect, useState } from 'react';

import { NavigationStyles } from '@sharedStyles';
import Image from 'next/image';
import { ReactNode } from 'react';

interface NavigationSmallProps {
    children: ReactNode;
}

export default function NavigationSmall({ children }: NavigationSmallProps) {
    const [menu, setMenu] = useState<boolean>(false);
    const triggerMenu = () => {
        setMenu(!menu);
    };
    return (
        <aside className={NavigationStyles.NavigationSmall}>
            <div
                className={NavigationStyles.NavigationSmallHead}
                onClick={triggerMenu}
            >
                <Image
                    src={`/icons/${menu ? 'cancel' : 'hamburger'}.svg`}
                    alt='Menu Icon'
                    width={24}
                    height={24}
                />
            </div>
            {menu ? (
                <div className={NavigationStyles.NavigationSmallBody}>
                    {children}
                </div>
            ) : (
                <></>
            )}
        </aside>
    );
}

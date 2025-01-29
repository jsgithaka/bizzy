'use client';

import { useState } from 'react';

import { Icon } from '@sharedComponents';
import { NavigationSmallStyles } from '@widgetsStyles';

export default function NavigationSmall({ children }: NavigationSmallProps) {
    const [trigger, setTrigger] = useState<boolean>(false);
    const toggleTrigger = () => {
        setTrigger(!trigger);
    };
    return (
        <div className={NavigationSmallStyles.NavigationSmall}>
            <div
                className={NavigationSmallStyles.NavigationSmallHead}
                onClick={toggleTrigger}
            >
                <Icon
                    name={trigger ? 'cancel' : 'menu'}
                    alt='Menu Icon'
                    width={16}
                    height={16}
                />
            </div>
            {trigger ? (
                <div className={NavigationSmallStyles.NavigationSmallBody}>
                    {children}
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}

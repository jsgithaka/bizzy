import { Icon } from '@sharedComponents';
import { NavigationSmallStyles } from '@widgetsStyles';

export default function NavigationSmall({ children }: NavigationSmallProps) {
    return (
        <div className={NavigationSmallStyles.NavigationSmall}>
            <div className={NavigationSmallStyles.NavigationSmallHead}>
                <Icon
                    name='menu'
                    alt='Menu Icon'
                    width={24}
                    height={24}
                />
            </div>
            <div className={NavigationSmallStyles.NavigationSmallBody}>
                {children}
            </div>
        </div>
    );
}

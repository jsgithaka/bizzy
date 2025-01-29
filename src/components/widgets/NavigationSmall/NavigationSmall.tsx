import { NavigationSmallStyles } from '@widgetsStyles';

export default function NavigationSmall({ children }: NavigationSmallProps) {
    return (
        <div className={NavigationSmallStyles.NavigationSmall}>
            <div className={NavigationSmallStyles.NavigationSmallHead}></div>
            <div className={NavigationSmallStyles.NavigationSmallBody}>
                {children}
            </div>
        </div>
    );
}

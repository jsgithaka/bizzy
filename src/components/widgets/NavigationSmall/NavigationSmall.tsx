import { NavigationSmallStyles } from '@widgetsStyles';

export default function NavigationSmall({ children }: NavigationSmallProps) {
    return (
        <div className={NavigationSmallStyles.NavigationSmall}>
            <div></div>
            <div>{children}</div>
        </div>
    );
}

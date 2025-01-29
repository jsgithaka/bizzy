import { NavigationLargeStyles } from '@widgetsStyles';

export default function NavigationLarge({ children }: NavigationLargeProps) {
    return (
        <div className={NavigationLargeStyles.NavigationLarge}>{children}</div>
    );
}

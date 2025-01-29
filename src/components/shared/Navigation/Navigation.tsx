import { NavigationStyles } from '@sharedStyles';
import { NavigationLarge, NavigationSmall } from '@widgetsComponents';

export default function Navigation({ children }: NavigationProps) {
    return (
        <nav className={NavigationStyles.Navigation}>
            <NavigationLarge>{children}</NavigationLarge>
            <NavigationSmall>{children}</NavigationSmall>
        </nav>
    );
}

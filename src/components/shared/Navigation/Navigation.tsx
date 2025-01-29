import { NavigationLarge, NavigationSmall } from '@widgetsComponents';

export default function Navigation({ children }: NavigationProps) {
    return (
        <nav>
            <NavigationLarge>{children}</NavigationLarge>
            <NavigationSmall>{children}</NavigationSmall>
        </nav>
    );
}

import { HeaderStyles } from '@/exports/styles/structural';

export default function Header({ children }: HeaderProps) {
    return <header className={HeaderStyles.Header}>{children}</header>;
}

import { MainStyles } from '@/exports/styles/structural';

export default function Main({ children }: MainProps) {
    return <main className={MainStyles.Main}>{children}</main>;
}

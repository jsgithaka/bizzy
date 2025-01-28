import '@/styles/global.css';
import { dmSans } from '@variableFonts';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang='en'
            className={dmSans.className}
        >
            {children}
        </html>
    );
}

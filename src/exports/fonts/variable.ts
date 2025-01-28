import localFont from 'next/font/local';

export const dmSans = localFont({
    src: [
        {
            path: '../../fonts/variable/dm_sans/normal.ttf',
            style: 'normal',
        },
        {
            path: '../../fonts/variable/dm_sans/italic.ttf',
            style: 'italic',
        },
    ],
});

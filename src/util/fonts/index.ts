import localFont from 'next/font/local';

const neueRegrade = localFont({
    src: './ttf/Neue Regrade Variable.ttf',
    variable: '--font-neue-regrade'
});

const generalSans = localFont({
    src: './ttf/GeneralSans-Variable.ttf',
    variable: '--font-general-sans'
});

export { neueRegrade, generalSans }
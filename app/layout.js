/* import '@react95/core/GlobalStyle'; */
import '@react95/core/themes/win95.css';
import '@react95/icons/icons.css';
import './globals.css';
import { Poppins, Inconsolata } from 'next/font/google';

const poppins = Poppins({
    weight: ['300', '400', '500', '600', '700'],
    style: 'normal',
    display: 'swap',
    subsets: ['latin'],
    variable: '--font-poppins',
});

const inconsolata = Inconsolata({
    weight: ['300', '400', '500', '600', '700'],
    style: 'normal',
    display: 'swap',
    subsets: ['latin'],
    variable: '--font-inconsolata',
});

export const metadata = {
    title: 'TEKR',
    description:
        'TEKR is a digital space blending creativity and commerce—featuring my portfolio and a carefully selected e-shop collection.',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en' className={poppins.variable + ' ' + inconsolata.variable}>
            <body className='font-inconsolata'>{children}</body>
        </html>
    );
}

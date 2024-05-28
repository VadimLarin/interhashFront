import '@/styles/index.scss';

import { Alegreya } from 'next/font/google';
import { Roboto } from 'next/font/google';
import { Inter } from 'next/font/google';
//import '@/src/app/global.css';

//import fonts from '/assets/fonts';
import type { Metadata } from "next";

import Header2 from '@/components/Header2';
import Footer3 from '@/components/Footer3';
import ReactQueryProvider from '@/providers/react-query';

const inter = Inter({
    subsets: ['cyrillic'],
    variable: '--font-inter',
    display: 'swap',
});

const alegreya = Alegreya({
    subsets: ['cyrillic'],
    variable: '--font-alegreya',
    display: 'swap',
});

const roboto = Roboto({
    subsets: ['cyrillic'],
    weight: ['400', '700'],
    variable: '--font-roboto',
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Интернет Магазин",
    description: "Проект 1",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru" className={`${alegreya.variable} ${roboto.variable}`}>
            <body className="wrapper">
                <ReactQueryProvider>
                    <Header2 />
                    <main>{children}</main>
                    <Footer3 />
                </ReactQueryProvider>
            </body>
        </html>
    );
}

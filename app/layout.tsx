import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ReduxStoreProvider from '~/lib/redux/store-provider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Chat app',
    description:
        'This is a chat app made with a purposes to learn NextJS and some intrinsics of WebSockets',
}

export default function RootLayout(
    props: Readonly<{
        children: React.ReactNode
    }>
) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ReduxStoreProvider>{props.children}</ReduxStoreProvider>
            </body>
        </html>
    );
}

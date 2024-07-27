import { languages } from '@/app/[locale]/i18n/settings'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export async function generateStaticParams() {
    return languages.map((locale) => ({ locale }))
}

export default function RootLayout({
    children,
    params: { locale },
}: Readonly<{
    children: React.ReactNode
    params: {
        locale: string
    }
}>) {
    return (
        <html lang={locale}>
            <head />
            <body>{children}</body>
        </html>
    )
}

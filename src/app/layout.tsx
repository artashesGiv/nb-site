import type { Metadata } from 'next'
import Link from 'next/link'
import './layout.scss'
import '@styles/index.scss'
import { nunitoSans } from '@styles/fonts'

export const metadata: Metadata = {
  title: 'METEO',
  description: 'METEO FRONTEND',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ru'>
      <body className={`${nunitoSans.variable}`}>
        <div className='menu'>
          <Link href='/'>Home</Link>
          <Link href='/auth'>Auth</Link>
          <Link href='/profile'>Profile</Link>
        </div>
        {children}
      </body>
    </html>
  )
}

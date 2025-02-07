import type { Metadata } from 'next'
import './layout.scss'
import '@styles/index.scss'
import { mulish, nunitoSans } from '@styles/fonts'

export const metadata: Metadata = {
  title: 'New Brand',
  description: 'New Brand Site',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ru'>
      <body className={`${nunitoSans.variable} ${mulish.variable}`}>
        {children}
      </body>
    </html>
  )
}

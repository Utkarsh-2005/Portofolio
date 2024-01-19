import './globals.css'
import { Inter } from 'next/font/google'
import Head from "next/head";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Utkarsh\'s Portfolio',
  description: 'This is a portfolio website of Utkarsh',
};


export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={inter.className}>
          {children}
          </body>
    </html>
  )
}

"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import { useEffect } from 'react'
import Head from "next/head";
import { ThemeProvider } from "../components/ui/theme-provider"

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  useEffect(() => {
    const threeScript = document.createElement("script");
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
    );
    document.getElementsByTagName("head")[0].appendChild(threeScript);
    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    };
  }, []);
  return (
    <html lang="en">
            <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Your Page Title</title>
      </Head>
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >{children}</ThemeProvider>
          </body>
    </html>
  )
}

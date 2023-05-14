import React from "react";
import './globals.css';
import '../styles/_fonts.scss';
import { Jura } from 'next/font/google'

const jura = Jura({ subsets: ['latin', 'cyrillic', 'cyrillic-ext', 'latin-ext'], variable: '--font-jura'})

const RootLayout: React.FC = ({ children }) => {
  return (
    <html lang="en">
    <body className={jura.className}>{children}</body>
    </html>
  )
}

export default RootLayout

import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './utilities/Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Books Store',
  description: 'Toko buku yang menjual buku apa saja',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

import Sidebar from '@/components/Sidebar'
import './globals.css'
import { Figtree, Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Shopify Clone",
  description: "Shopify Clone",
}


const font = Figtree({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Sidebar>
          {children}
        </Sidebar>

      </body>
    </html>
  )
}

import Sidebar from '@/components/Sidebar'
import './globals.css'
import { Figtree, Inter } from 'next/font/google'
import ClientSessionProvider from '@/providers/SessionProvider'
import UiProvider, { UiContext } from '@/providers/ui/UiProvider'
import RegisterModal from '@/components/modals/RegisterModal'
import ToasterProvider from '@/providers/toaster/ToasterProvider'

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
        <ClientSessionProvider>
          <UiProvider>
            <ToasterProvider />
            <RegisterModal />
            <Sidebar>
              {children}
            </Sidebar>
          </UiProvider>
        </ClientSessionProvider>

      </body>
    </html>
  )
}

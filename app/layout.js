import Sidebar from '@/components/Sidebar'
import './globals.css'
import { Figtree, Inter } from 'next/font/google'
import ClientSessionProvider from '@/providers/SessionProvider'
import UiProvider, { UiContext } from '@/providers/ui/UiProvider'
import ToasterProvider from '@/providers/toaster/ToasterProvider'
import { AuthProvider } from '@/providers/auth/AuthProvider'
import ModalsProvider from '@/providers/modalsProvider'
import UserProvider from '@/providers/UserProvider'

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
          <AuthProvider>
            <UserProvider>
              <UiProvider>
                <ToasterProvider />
                <ModalsProvider />
                <Sidebar>
                  {children}
                </Sidebar>
              </UiProvider>
            </UserProvider>
          </AuthProvider>
        </ClientSessionProvider>

      </body>
    </html>
  )
}

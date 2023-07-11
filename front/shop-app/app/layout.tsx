import Header from '@/components/layout/header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/layout/footer'
import { Providers } from '@/redux/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shop App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
       <Providers>
        <body className={inter.className + " bg-blue-50 h-screen flex flex-col"}>
            <Header/>
            <main className='mx-5 mt-2' style={{flex: "1 0 auto"}}>
              {children}
            </main>
            <Footer/>
        </body>
      </Providers>
    </html>
  )
}

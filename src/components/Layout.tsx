import { FC, ReactNode } from 'react'
import Head from 'next/head'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Rukmal Air Tours - Redesign</title>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
        <link rel='manifest' href='/site.webmanifest'></link>
      </Head>
      {/* <NavBar/> */}
      <div className='w-full min-h-screen overflow-x-hidden bg-dark text-white'>
        <main className='max-w-7xl mx-auto'>{children}</main>
      </div>
      {/* <Footer/> */}
    </>
  )
}

export default Layout

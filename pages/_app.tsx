import type { AppProps } from 'next/app'
import Head from 'next/head'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'

import 'tailwindcss/tailwind.css'
import '@/styles/globalStyles.css'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ThemeStyles from '@/components/ThemeStyles'
import themes from '@/lib/themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimateSharedLayout>
      <ThemeStyles themes={themes} customThemesKey=''>
        <Head>
        </Head>

        <Navbar />

        {/* Allows Pages to Animate When Un-mounting */}
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} />
        </AnimatePresence>

        <Footer />
      </ThemeStyles>
    </AnimateSharedLayout>
  )
}

export default MyApp

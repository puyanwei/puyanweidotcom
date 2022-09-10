import '@/styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='grid mx-auto max-w-[1200px]'>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp

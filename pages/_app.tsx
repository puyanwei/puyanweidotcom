import './styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='text-gray-700'>
      <Component {...pageProps} />
      HELLO FROM APP
    </div>
  )
}

export default MyApp

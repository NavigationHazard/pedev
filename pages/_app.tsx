import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ScrollObserver from '../utils/scroll-observer'
import SizeObserver from '../utils/size-observer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <SizeObserver>
      <ScrollObserver scrollY={0}>
          
             <Component {...pageProps} />
      </ScrollObserver>
 </SizeObserver>
  )
}

export default MyApp

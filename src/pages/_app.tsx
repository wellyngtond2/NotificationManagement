import { AppProps } from 'next/app'
import { AppProviders } from '../contexts';

function MyApp({ pageProps, Component }: AppProps) {
  return (
    <AppProviders >
      <Component {...pageProps} />
    </AppProviders>
  )
}

export default MyApp

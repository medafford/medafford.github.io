import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {createTheme, ThemeProvider} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import {AppProps} from "next/app";
import Head from 'next/head';
import Navbar from "../navbar";
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { globalStyles, Main } from '../styles'

const cache = createCache({ key: 'next' })

export default function App({Component, pageProps}: AppProps<any>) {
  const theme = createTheme({
    palette: {
      contrastThreshold: 4.5,
      background: {
        default: '#FFFFFF'
      }
    }
  });
  return (
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          <Head>
            <title>Medafford</title>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
          </Head>
          <CssBaseline />
          {globalStyles}
          <Navbar />
          <Main>
            <Component {...pageProps} />
          </Main>
        </ThemeProvider>
      </CacheProvider>
  )
}

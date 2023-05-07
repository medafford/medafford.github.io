import '../globals.css'
import styles from '../page.module.css'
import Head from 'next/head';
import {ThemeProvider, createTheme} from '@mui/material';
import {AppProps} from "next/app";

export default function App({Component, pageProps}: AppProps<any>) {
  return (
      <div>
        <Head>
          <title>Medafford</title>
        </Head>
        <ThemeProvider theme={createTheme()}>
          <div className={styles.main}>
            <Component {...pageProps} />
          </div>
        </ThemeProvider>
      </div>
  )
}

import '../globals.css'
import styles from '../page.module.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Box, createTheme, ThemeProvider} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import {AppProps} from "next/app";
import Head from 'next/head';

export default function App({Component, pageProps}: AppProps<any>) {
  return (
      <ThemeProvider theme={createTheme()}>
        <Head>
          <title>Medafford</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <CssBaseline />
        <Box className={styles.main}>
          <Component {...pageProps} />
        </Box>
      </ThemeProvider>
  )
}

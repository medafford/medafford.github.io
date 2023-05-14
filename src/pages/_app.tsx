import '../globals.css'
import styles from '../page.module.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Box, createTheme, StyledEngineProvider, ThemeProvider} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import {AppProps} from "next/app";
import Head from 'next/head';
import Navbar from "../navbar";

export default function App({Component, pageProps}: AppProps<any>) {
  const theme = createTheme({
    palette: {
      contrastThreshold: 4.5,
      background: {
        default: '#052049'
      }
    }
  });
  return (
      <ThemeProvider theme={theme}>
        <Head>
          <title>Medafford</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <CssBaseline />
        <StyledEngineProvider injectFirst>
          <Navbar />
          <Box className={styles.main}>
            <Component {...pageProps} />
          </Box>
        </StyledEngineProvider>
      </ThemeProvider>
  )
}

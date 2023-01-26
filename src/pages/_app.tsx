import '@/styles/globals.css'

import * as React from 'react';
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
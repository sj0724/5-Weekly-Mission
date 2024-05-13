import Footer from '@/components/Footer/Footer';
import Nav from '@/components/Nav/Nav';
import { ModalProvider } from '@/contexts/ModalContext';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Linkbrary</title>
      </Head>
      <Nav />
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
      <Footer />
    </>
  );
}
